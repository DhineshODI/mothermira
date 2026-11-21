<?php
/**
 * Mother Mira — enquiry endpoint (PHPMailer)
 *
 * POST JSON:
 *   { type: "contact"   , name, phone, email, message? }
 *   { type: "sitevisit" , name, phone, email, project, expectedDate?, preferredTime?, message? }
 *   { type: "brochure"  , name, phone, email, project, brochure? }
 *
 * Response: { "ok": true } | { "error": "...", "fields": {...} }
 */

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if (file_exists(__DIR__ . '/vendor/autoload.php')) {
    require __DIR__ . '/vendor/autoload.php';
} else {
    require __DIR__ . '/PHPMailer/src/PHPMailer.php';
    require __DIR__ . '/PHPMailer/src/SMTP.php';
    require __DIR__ . '/PHPMailer/src/Exception.php';
}

$config = require __DIR__ . '/config.php';

header('Access-Control-Allow-Origin: ' . ($config['cors_origin'] ?? '*'));
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// Diagnostic: open api/enquiry.php?ping=1 in a browser to check the environment.
if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['ping'])) {
    echo json_encode([
        'ok'             => true,
        'php'            => PHP_VERSION,
        'transport'      => $config['transport'] ?? 'smtp',
        'phpmailer'      => class_exists('PHPMailer\\PHPMailer\\PHPMailer'),
        'mail_function'  => function_exists('mail'),
        'openssl'        => extension_loaded('openssl'),
        'mail_to'        => $config['smtp_to'],
        'mail_from'      => $config['smtp_from'],
        'log_writable'   => is_writable(__DIR__),
    ], JSON_PRETTY_PRINT);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'error' => 'Method not allowed',
        'hint'  => 'This endpoint only accepts POST. Add ?ping=1 to run a diagnostic.',
    ]);
    exit;
}

function esc($s = '')
{
    return htmlspecialchars((string) $s, ENT_QUOTES, 'UTF-8');
}

function field($b, $k)
{
    return isset($b[$k]) ? trim((string) $b[$k]) : '';
}

$b = json_decode(file_get_contents('php://input'), true) ?: [];

$TYPES = [
    'contact'   => 'Contact Enquiry',
    'sitevisit' => 'Site Visit Request',
    'brochure'  => 'Brochure Download',
];

$type = field($b, 'type');
if (!isset($TYPES[$type])) {
    $type = 'contact';
}
$label = $TYPES[$type];

$name    = field($b, 'name');
$email   = field($b, 'email');
// E.164 from the international phone field, e.g. +919876543210
$phone   = preg_replace('/[^\d+]/', '', field($b, 'phone'));
$country = strtoupper(preg_replace('/[^A-Za-z]/', '', field($b, 'mobileCountry')));
$project = field($b, 'project');

// ---- validation (mirrors the client-side rules) ----
$errors = [];

$nameLen = function_exists('mb_strlen') ? mb_strlen($name) : strlen($name);
if ($name === '' || $nameLen < 2) {
    $errors['name'] = 'Enter a valid name';
}
if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors['email'] = 'Enter a valid email address';
}
if (!preg_match('/^\+[1-9]\d{7,14}$/', $phone)) {
    $errors['phone'] = 'Enter a valid phone number';
} elseif (strpos($phone, '+91') === 0 && !preg_match('/^\+91[6-9]\d{9}$/', $phone)) {
    // India is stricter: mobile numbers are 10 digits starting 6/7/8/9.
    $errors['phone'] = 'Enter a valid 10-digit mobile number starting 6, 7, 8 or 9';
}
if (($type === 'sitevisit' || $type === 'brochure') && $project === '') {
    $errors['project'] = 'Project is required';
}

if ($errors) {
    http_response_code(400);
    echo json_encode(['error' => 'Validation failed', 'fields' => $errors]);
    exit;
}

// ---- build the mail body ----
$rows = [
    'Name'     => $name,
    'Email'    => $email,
    'Phone'    => $phone,
    'WhatsApp' => 'https://wa.me/' . preg_replace('/\D/', '', $phone),
    'Project'  => $project,
];

// Only worth showing when it is not the default market.
if ($country !== '' && $country !== 'IN') {
    $rows['Country'] = $country;
}

if ($type === 'sitevisit') {
    $rows['Expected Date']  = field($b, 'expectedDate');
    $rows['Preferred Time'] = field($b, 'preferredTime');
}
if ($type === 'brochure') {
    $rows['Brochure'] = field($b, 'brochure');
}

$message = field($b, 'message');
$rows['Page'] = field($b, 'pageUrl');

$html = '<h2>' . esc($label) . '</h2><table cellpadding="6" cellspacing="0" border="0">';
$text = $label . "\n\n";

foreach ($rows as $k => $v) {
    if ($v === '') {
        continue;
    }
    $cell = (strpos($v, 'https://') === 0)
        ? '<a href="' . esc($v) . '">' . esc($v) . '</a>'
        : esc($v);
    $html .= '<tr><td><strong>' . esc($k) . ':</strong></td><td>' . $cell . '</td></tr>';
    $text .= "$k: $v\n";
}
$html .= '</table>';

if ($message !== '') {
    $html .= '<p><strong>Message:</strong><br/>' . nl2br(esc($message)) . '</p>';
    $text .= "\nMessage:\n" . $message . "\n";
}

// ---- send ----
/**
 * Build and send one message. $portOverride/$secureOverride let us retry on a
 * different port if the host blocks the first one.
 */
function send_mail($config, $type, $label, $project, $name, $email, $html, $text, $portOverride = null, $secureOverride = null)
{
    $mail = new PHPMailer(true);

    if (($config['transport'] ?? 'smtp') === 'mail') {
        $mail->isMail();
    } else {
        $secure = $secureOverride ?? $config['smtp_secure'];

        $mail->isSMTP();
        $mail->Host     = $config['smtp_host'];
        $mail->Port     = (int) ($portOverride ?? $config['smtp_port']);
        $mail->SMTPAuth = !empty($config['smtp_auth']);
        $mail->Timeout  = 20;

        if ($mail->SMTPAuth) {
            $mail->Username = $config['smtp_user'];
            $mail->Password = $config['smtp_pass'];
        }

        if ($secure === 'ssl') {
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        } elseif ($secure === 'tls') {
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        } else {
            $mail->SMTPSecure  = false;
            $mail->SMTPAutoTLS = false;
        }
    }

    $mail->CharSet = 'UTF-8';
    $from = $config['smtp_from'] ?: $config['smtp_user'];
    $mail->setFrom($from, $config['from_name'] ?? 'Mother Mira');
    // Envelope sender — many cPanel/Exim hosts reject mail() without it.
    $mail->Sender = $from;
    $mail->addAddress($config['smtp_to']);
    if (!empty($config['smtp_bcc'])) {
        $mail->addBCC($config['smtp_bcc']);
    }
    if ($email !== '') {
        $mail->addReplyTo($email, $name);
    }

    $mail->isHTML(true);
    $mail->Subject = $label . ' from ' . $name . ($project !== '' ? ' - ' . $project : '');
    $mail->Body    = $html;
    $mail->AltBody = $text;

    $mail->send();
    return $mail;
}

/* ------------------------------------------------------------------ *
 * Acknowledgement to the enquirer
 * ------------------------------------------------------------------ */
function ack_copy($type, $name, $project)
{
    $hi = 'Hi ' . esc($name) . ',';

    switch ($type) {
        case 'sitevisit':
            return [
                'subject' => 'Your site visit request - Mother Mira',
                'lead'    => 'Thank you for requesting a site visit'
                             . ($project !== '' ? ' at <strong>' . esc($project) . '</strong>' : '') . '.',
                'body'    => 'Our team will call you shortly to confirm your preferred date and time.',
            ];
        case 'brochure':
            return [
                'subject' => 'Your brochure - Mother Mira',
                'lead'    => 'Thank you for your interest in'
                             . ($project !== '' ? ' <strong>' . esc($project) . '</strong>' : ' Mother Mira') . '.',
                'body'    => 'The brochure is attached to this email. Our team will be in touch if you would like to know more.',
            ];
        default:
            return [
                'subject' => 'We received your enquiry - Mother Mira',
                'lead'    => 'Thank you for getting in touch with Mother Mira.',
                'body'    => 'Our team will review your enquiry and get back to you within 24 hours.',
            ];
    }
}

/**
 * Resolve a brochure web path (e.g. /mother-mira-with-form/pdf/x.pdf) to a file
 * inside ../pdf/. Returns null if it does not resolve to a real PDF there.
 */
function brochure_file($webPath)
{
    if ($webPath === '' || substr(strtolower($webPath), -4) !== '.pdf') {
        return null;
    }
    $dir  = realpath(__DIR__ . '/../pdf');
    if ($dir === false) {
        return null;
    }
    $file = realpath($dir . '/' . basename($webPath));

    return ($file && strpos($file, $dir) === 0 && is_readable($file)) ? $file : null;
}

function send_ack($config, $type, $name, $email, $project, $brochureWebPath, $portOverride = null, $secureOverride = null)
{
    $copy = ack_copy($type, $name, $project);

    $html = '<div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#161616;'
          . 'max-width:560px;margin:0 auto;background:#EDE8D0;padding:32px 28px;border-radius:12px">'
          . '<p style="margin:0 0 16px;font-size:13px;letter-spacing:1px;color:#004852;text-transform:uppercase">Mother Mira</p>'
          . '<p style="margin:0 0 14px">Hi ' . esc($name) . ',</p>'
          . '<p style="margin:0 0 14px">' . $copy['lead'] . '</p>'
          . '<p style="margin:0 0 22px">' . esc($copy['body']) . '</p>'
          . '<p style="margin:0 0 4px">Need us sooner?</p>'
          . '<p style="margin:0 0 22px">'
          . '<a href="mailto:sales@mothermira.com" style="color:#004852">sales@mothermira.com</a><br>'
          . '<a href="tel:+919840029535" style="color:#004852">+91 98400 29535</a></p>'
          . '<p style="margin:0;color:#004852"><strong>Mother Mira Industries Ltd</strong></p>'
          . '<p style="margin:4px 0 0;font-size:12px;color:#666">This is an automated confirmation - no reply needed.</p>'
          . '</div>';

    $text = "Hi {$name},\n\n"
          . strip_tags($copy['lead']) . "\n"
          . $copy['body'] . "\n\n"
          . "sales@mothermira.com | +91 98400 29535\n"
          . "Mother Mira Industries Ltd\n";

    $mail = new PHPMailer(true);

    if (($config['transport'] ?? 'smtp') === 'mail') {
        $mail->isMail();
    } else {
        $secure = $secureOverride ?? $config['smtp_secure'];

        $mail->isSMTP();
        $mail->Host     = $config['smtp_host'];
        $mail->Port     = (int) ($portOverride ?? $config['smtp_port']);
        $mail->SMTPAuth = !empty($config['smtp_auth']);
        $mail->Timeout  = 20;

        if ($mail->SMTPAuth) {
            $mail->Username = $config['smtp_user'];
            $mail->Password = $config['smtp_pass'];
        }

        if ($secure === 'ssl') {
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        } elseif ($secure === 'tls') {
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        } else {
            $mail->SMTPSecure  = false;
            $mail->SMTPAutoTLS = false;
        }
    }

    $mail->CharSet = 'UTF-8';
    $from = $config['smtp_from'] ?: $config['smtp_user'];
    $mail->setFrom($from, $config['from_name'] ?? 'Mother Mira');
    $mail->Sender = $from;
    $mail->addAddress($email, $name);
    $mail->addReplyTo($config['smtp_to'], $config['from_name'] ?? 'Mother Mira');

    // Attach the brochure to brochure-download acknowledgements.
    if ($type === 'brochure' && !empty($config['ack_attach_brochure'])) {
        $file = brochure_file($brochureWebPath);
        if ($file) {
            $mail->addAttachment($file, 'Mother Mira Brochure.pdf');
        }
    }

    $mail->isHTML(true);
    $mail->Subject = $copy['subject'];
    $mail->Body    = $html;
    $mail->AltBody = $text;

    $mail->send();
}

$args = [$config, $type, $label, $project, $name, $email, $html, $text];
$detail = null;

/** Acknowledgement must never break the response — log and move on. */
function try_ack($config, $type, $name, $email, $project, $brochure, $port = null, $secure = null)
{
    if (empty($config['send_ack'])) {
        return;
    }
    try {
        send_ack($config, $type, $name, $email, $project, $brochure, $port, $secure);
    } catch (\Throwable $e) {
        error_log('Ack mail failed: ' . $e->getMessage());
        if (!empty($config['debug_log'])) {
            @file_put_contents(
                __DIR__ . '/mail-error.log',
                date('c') . ' [ack:' . $type . '] ' . $e->getMessage() . PHP_EOL,
                FILE_APPEND
            );
        }
    }
}

$brochureWebPath = field($b, 'brochure');

try {
    send_mail(...$args);
    try_ack($config, $type, $name, $email, $project, $brochureWebPath);
    echo json_encode(['ok' => true]);
    exit;
} catch (\Throwable $e) {
    $detail = $e->getMessage();
}

// Port 465 is blocked on a fair number of shared hosts — retry on 587/STARTTLS.
if (($config['transport'] ?? 'smtp') === 'smtp' && (int) $config['smtp_port'] === 465) {
    try {
        send_mail(...array_merge($args, [587, 'tls']));
        try_ack($config, $type, $name, $email, $project, $brochureWebPath, 587, 'tls');
        echo json_encode(['ok' => true, 'note' => 'sent via port 587']);
        exit;
    } catch (\Throwable $e2) {
        $detail .= ' | retry 587: ' . $e2->getMessage();
    }
}

error_log('Mail error: ' . $detail);

if (!empty($config['debug_log'])) {
    @file_put_contents(
        __DIR__ . '/mail-error.log',
        date('c') . ' [' . $type . '] ' . $detail . PHP_EOL,
        FILE_APPEND
    );
}

http_response_code(500);
echo json_encode(array_filter([
    // While debug_log is on, surface the real reason in the response too.
    'error'  => 'Failed to send email',
    'detail' => !empty($config['debug_log']) ? $detail : null,
]));
