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
$phone   = preg_replace('/\D/', '', field($b, 'phone'));
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
if (!preg_match('/^[6-9]\d{9}$/', $phone)) {
    $errors['phone'] = 'Enter a valid 10-digit mobile number';
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
    'Name'    => $name,
    'Email'   => $email,
    'Phone'   => $phone,
    'Project' => $project,
];

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
    $html .= '<tr><td><strong>' . esc($k) . ':</strong></td><td>' . esc($v) . '</td></tr>';
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

$args = [$config, $type, $label, $project, $name, $email, $html, $text];
$detail = null;

try {
    send_mail(...$args);
    echo json_encode(['ok' => true]);
    exit;
} catch (\Throwable $e) {
    $detail = $e->getMessage();
}

// Port 465 is blocked on a fair number of shared hosts — retry on 587/STARTTLS.
if (($config['transport'] ?? 'smtp') === 'smtp' && (int) $config['smtp_port'] === 465) {
    try {
        send_mail(...array_merge($args, [587, 'tls']));
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
