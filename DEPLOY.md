# Deploying mothermira.com

Pushes to `main` deploy automatically via GitHub Actions
(`.github/workflows/deploy.yml`). The steps below are the **one-time setup**;
after that, deploying is just merging to `main`.

The site is a static export, so the server needs no Node — only PHP, for the
enquiry endpoint in `api/`.

---

## One-time setup

### 1. Move the current live site to /old/

Do this once, before the first automated deploy. The old site stays reachable
at `https://mothermira.com/old/`, and the workflow is set never to touch it.

SSH in (hPanel → Advanced → SSH Access for the host, port and username):

```bash
ssh -p 65002 u123456789@123.45.67.89
```

```bash
cd ~/public_html          # or ~/domains/mothermira.com/public_html

# full archive first — this is the real safety net
mkdir -p ~/backups
tar -czf ~/backups/pre-launch-$(date +%Y%m%d-%H%M).tar.gz .
ls -lh ~/backups/

# then move everything into old/, leaving old/ itself behind
mkdir -p old
find . -maxdepth 1 -mindepth 1 \
  ! -name 'old' ! -name 'backups' ! -name '.well-known' ! -name 'cgi-bin' \
  -exec mv -t old/ -- {} +

ls -la          # should be nearly empty now, with old/ holding the site
```

Keep `/old/` out of search results — it is the same content on a second URL,
which splits your ranking:

```bash
printf 'Header set X-Robots-Tag "noindex, nofollow"\n' > old/.htaccess
```

If the old site was WordPress, its own `.htaccess` moved into `old/` with it,
so it no longer rewrites requests at the root. Check `old/index.php` still
loads; a WordPress install usually needs its site URL updated before it will
render from a sub-folder.

### 2. SSH key for GitHub

On your machine:

```powershell
ssh-keygen -t ed25519 -C "github-actions-mothermira" -f $env:USERPROFILE\.ssh\mothermira_deploy -N '""'
```

Put the **public** key (`mothermira_deploy.pub`) into hPanel → Advanced →
SSH Access → Manage SSH keys → Import.

Test it before handing it to GitHub:

```powershell
ssh -i $env:USERPROFILE\.ssh\mothermira_deploy -p 65002 u123456789@123.45.67.89 "echo connected; pwd"
```

### 3. Repository secrets

GitHub → Settings → Secrets and variables → Actions → New repository secret:

| Secret | Value | Where to find it |
|---|---|---|
| `SSH_HOST` | `123.45.67.89` | hPanel → SSH Access |
| `SSH_PORT` | `65002` | hPanel → SSH Access |
| `SSH_USER` | `u123456789` | hPanel → SSH Access |
| `SSH_PRIVATE_KEY` | contents of `mothermira_deploy` (the file **without** `.pub`, including the BEGIN/END lines) | your machine |
| `DEPLOY_PATH` | `/home/u123456789/domains/mothermira.com/public_html` | `pwd` inside `public_html` |
| `SITE_URL` | `https://mothermira.com` | — |

### 4. Create api/config.php on the server

It holds the mailbox password, so it is gitignored and never shipped by the
workflow — which also means the workflow can't create it. Once:

```bash
cd ~/domains/mothermira.com/public_html
cp api/config.sample.php api/config.php
nano api/config.php
```

Production values:

```php
'smtp_host'   => 'smtp.office365.com',
'smtp_port'   => 587,
'smtp_secure' => 'tls',
'smtp_user'   => 'sales@mothermira.com',
'smtp_pass'   => '…',          // Office 365 requires From == this mailbox
'smtp_from'   => 'sales@mothermira.com',
'smtp_to'     => 'kavirajan@opendesignsin.com',
'debug_log'   => false,        // true leaks error detail in HTTP responses
'cors_origin' => '',           // same origin, no header needed
```

Deploys leave this file alone, so you set it once.

---

## Deploying

Merge to `main`. That's it — Actions builds and uploads.

Watch it under the repo's **Actions** tab. To deploy without a code change, or
to test the build without touching the server, use **Run workflow** (it has a
`dry_run` option).

What a run does:

1. `npm ci` and `npm run build:prod` (domain-root base path)
2. **Verifies the build** — the key pages and `api/enquiry.php` exist, `_next/`
   paths are root-relative, and `api/config.php` isn't in the bundle. A wrong
   base path fails here rather than on the live site
3. Tars the live site into `~/backups/live-<timestamp>.tar.gz`, keeping the last 5
4. `rsync --delete`, protecting `api/config.php`, `api/*.log`, `/old/`,
   `/.well-known/` and `/cgi-bin/`
5. Curls the live pages and confirms `api/config.php` returns 403/404

A red run at step 2 means nothing was uploaded. A red run at step 5 means it
*was* uploaded and the site needs a look.

---

## Rollback

```bash
ls -1t ~/backups/live-*.tar.gz | head
cd ~/domains/mothermira.com/public_html
tar -xzf ~/backups/live-<timestamp>.tar.gz
```

The tarball only holds what was live at that moment, so it restores over the
current files rather than clearing them first. For a clean restore, move the
current folder aside first and extract into an empty one.

Faster in practice: `git revert` the bad commit and push — a deploy takes
about two minutes.

---

## Troubleshooting

| Symptom | Cause → fix |
|---|---|
| Site unstyled, no JS | `_next/` built for the wrong base. Step 2 should have caught it — check you ran `build:prod`, not `build:dev` |
| Every form returns 500 | `api/config.php` missing or wrong password. `?ping=1` reports the environment; `api/mail-error.log` has the reason when `debug_log` is on |
| `{"error":"Method not allowed"}` in a browser | Correct — the endpoint is POST-only |
| Changes not visible | Hostinger cache → hPanel → Dashboard → Clear cache, then Ctrl+Shift+R |
| Workflow fails at "Set up SSH" | Public key not imported in hPanel, or `SSH_PRIVATE_KEY` is missing its BEGIN/END lines |
| `rsync: command not found` | Rare on Hostinger. Swap the Upload step for `lftp` over FTP |
| `/old/` disappeared | Only if someone removed the `--exclude='/old/'` line |

Still open: `www` vs non-`www` needs a canonical choice and a 301, and
`NEXT_PUBLIC_SITE_URL` isn't wired up yet, so there are no canonical tags or a
sitemap.
