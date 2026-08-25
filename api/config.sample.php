<?php
/**
 * Template for api/config.php — copy this file to config.php and fill in the
 * password. config.php is gitignored because it holds credentials.
 *
 *   cp api/config.sample.php api/config.php
 */
return [
    'transport'   => 'smtp',           // 'smtp' | 'mail' (local PHP mail())

    // --- Microsoft 365 (Exchange Online) ---
    'smtp_host'   => 'smtp.office365.com',
    'smtp_port'   => 587,
    'smtp_secure' => 'tls',            // 'ssl' (465) | 'tls' (587/STARTTLS) | '' (none)
    'smtp_auth'   => true,
    'smtp_user'   => 'sales@mothermira.com',
    'smtp_pass'   => '',               // <-- fill in

    // Office 365 requires From to match the authenticated mailbox.
    'smtp_from'   => 'sales@mothermira.com',
    'from_name'   => 'Mother Mira',
    'smtp_to'     => 'kavirajan@opendesignsin.com',
    'smtp_bcc'    => '',

    // Acknowledgement email to the person who submitted the form.
    'send_ack'            => true,
    'ack_attach_brochure' => true,

    'cors_origin' => '*',              // set to the live origin in production
    'debug_log'   => true,             // false in production
];
