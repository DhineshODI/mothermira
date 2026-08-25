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

`api/config.php` is not in git (it holds the mailbox password). Copy the
template and fill in the password:

```bash
cp api/config.sample.php api/config.php
```

Current settings — Microsoft 365, since the host has PHP `mail()` disabled:

| Setting | Value |
|---|---|
| Host | smtp.office365.com |
| Port | 587 |
| Encryption | STARTTLS (`'tls'`) |
| Username | sales@mothermira.com |
| From | sales@mothermira.com |
| Enquiries to | kavirajan@opendesignsin.com |

Office 365 requires `smtp_from` to match the authenticated mailbox, or a mailbox
it has Send As rights on — changing one without the other causes a 5.7.60
"client does not have permissions to send as this sender" rejection.

Two things to confirm on the tenant if authentication fails:

- **SMTP AUTH must be enabled** for the mailbox. Microsoft disables it by
  default: Microsoft 365 admin centre → Users → sales@mothermira.com → Mail →
  Manage email apps → tick *Authenticated SMTP*.
- **If the mailbox has MFA**, the normal password will not work — generate an
  app password and use that.

Requirements: PHP 7.4+ with the `openssl` extension.

### Acknowledgement email

Every submission also sends a branded auto-reply to the person who filled the
form, with wording per form type:

| Form | Subject |
|---|---|
| Contact | We received your enquiry - Mother Mira |
| Site visit | Your site visit request - Mother Mira |
| Brochure | Your brochure - Mother Mira (PDF attached) |

Brochure acknowledgements attach `public/pdf/<file>.pdf`, resolved from the
`brochure` value sent by the form — so `api/` and `pdf/` must sit in the same
folder on the server (the build script already arranges this).

Toggles in `config.php`: `'send_ack'` and `'ack_attach_brochure'`. If the
acknowledgement fails it is logged but never fails the submission — the enquiry
notification still reaches you.

## 4. Test checklist

- `/mother-mira-with-form/contact-us/` → submit → success message → `/thank-you/`
- `/mother-mira-with-form/ourprojects/` → **Download Brochure** → modal → submit →
  thank-you page auto-downloads `the-wind-brochure.pdf`
- **Book a Site Visit** → modal with date/time → submit → thank-you page
- Phone field: rejects anything not 10 digits starting 6/7/8/9
- Check the inbox for three mails, each with the project name in the subject
- Check the address you typed into the form for three acknowledgements, and that
  the brochure one has the PDF attached

If a submission returns a 500, `api/mail-error.log` will contain the reason
(`'debug_log' => true` in config). Delete that file and set `debug_log` to
`false` before going live.

## 5. Before production

- `config.php`: set `'cors_origin'` to the live origin instead of `*`
- `config.php`: `'debug_log' => false`, remove `api/mail-error.log`
- Don't commit `config.php` once it holds a real SMTP password
