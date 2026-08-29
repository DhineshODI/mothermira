# Deploying to https://dev.opendesignsin.com/mother-mira-with-form/

The site is exported as static HTML and the enquiry form posts to a PHP endpoint
that ships inside the same folder — so the whole thing is a plain file upload.

## 1. Build (run on your machine)

```bash
cd mothermira
npm install          # only if node_modules is missing
npm run build:dev
```

`build:dev` = `node scripts/build-export.mjs --base=/mother-mira-with-form`, which:

1. runs `next build` with `output: "export"`, `basePath: /mother-mira-with-form`, `trailingSlash: true`
2. runs `scripts/fix-paths.mjs` — prefixes raw `/images/`, `/fonts/`, `/pdf/`, `/videos/`
   references in the exported files (Next's basePath only rewrites `next/image`,
   `next/link` and router URLs, not plain `<img src="...">` or CSS `url(...)`)
3. copies `api/` into `out/api/`
4. sets `NEXT_PUBLIC_API_URL=/mother-mira-with-form/api/enquiry.php` into the bundle

Result: the `out/` folder.

Deploying to a different folder later? `npm run build:export -- --base=/some-folder`.

## 2. Upload

Upload **the contents of `out/`** into the `mother-mira-with-form` folder on the
server (via cPanel File Manager or FTP), so you end up with:

```
public_html/mother-mira-with-form/
├── index.html
├── contact-us/index.html
├── ourprojects/index.html
├── thank-you/index.html
├── _next/...
├── images/  fonts/  pdf/
└── api/
    ├── enquiry.php
    ├── config.php
    └── PHPMailer/
```

## 3. Mail configuration

`api/config.php` currently uses `'transport' => 'mail'` — the server's local PHP
`mail()`. No credentials needed, so the form works as soon as it's uploaded.
Enquiries go to **kavirajan@opendesignsin.com**.

For better deliverability, switch to SMTP:

```php
'transport' => 'smtp',
'smtp_host' => 'mail.opendesignsin.com',
'smtp_port' => 465,
'smtp_secure' => 'ssl',
'smtp_auth' => true,
'smtp_user' => 'donotreply@opendesignsin.com',
'smtp_pass' => '••••••',
```

Requirements: PHP 7.4+ with the `openssl` extension (needed only for SMTP).

## 4. Test checklist

- `/mother-mira-with-form/contact-us/` → submit → success message → `/thank-you/`
- `/mother-mira-with-form/ourprojects/` → **Download Brochure** → modal → submit →
  thank-you page auto-downloads `the-wind-brochure.pdf`
- **Book a Site Visit** → modal with date/time → submit → thank-you page
- Phone field: rejects anything not 10 digits starting 6/7/8/9
- Check the inbox for three mails, each with the project name in the subject

If a submission returns a 500, `api/mail-error.log` will contain the reason
(`'debug_log' => true` in config). Delete that file and set `debug_log` to
`false` before going live.

## 5. Before production

- `config.php`: set `'cors_origin'` to the live origin instead of `*`
- `config.php`: `'debug_log' => false`, remove `api/mail-error.log`
- Don't commit `config.php` once it holds a real SMTP password
