/**
 * Static export runner for sub-folder hosting.
 *
 *   node scripts/build-export.mjs --base=/mother-mira-with-form
 *
 * Steps:
 *   1. next build  (output: "export", basePath = EXPORT_BASE)
 *   2. fix-paths   (prefix raw /images/, /fonts/, /pdf/ references)
 *   3. copy api/   (PHP enquiry endpoint) into out/api
 *
 * No cross-env needed — env vars are set here, so it works on Windows too.
 */
import { execSync } from "child_process";
import { cpSync, existsSync, rmSync } from "fs";
import { fileURLToPath } from "url";

const arg = process.argv.find((a) => a.startsWith("--base="));
const base = (arg ? arg.split("=")[1] : process.env.EXPORT_BASE || "").replace(
  /\/$/,
  ""
);

if (!base.startsWith("/")) {
  console.error('EXPORT_BASE must start with "/", e.g. --base=/mother-mira-with-form');
  process.exit(1);
}

const root = fileURLToPath(new URL("..", import.meta.url));
const outDir = new URL("../out/", import.meta.url);
const apiSrc = new URL("../api/", import.meta.url);

process.env.STATIC_EXPORT = "true";
process.env.EXPORT_BASE = base;
process.env.NEXT_PUBLIC_BASE_PATH = base;
// The PHP endpoint ships inside the same folder, so the API lives under the base path.
process.env.NEXT_PUBLIC_API_URL =
  process.env.NEXT_PUBLIC_API_URL || `${base}/api/enquiry.php`;

console.log(`\n▸ Static export`);
console.log(`  base path : ${base}`);
console.log(`  api url   : ${process.env.NEXT_PUBLIC_API_URL}\n`);

// A stale out/ can leave deleted routes behind.
if (existsSync(fileURLToPath(outDir))) {
  rmSync(fileURLToPath(outDir), { recursive: true, force: true });
}

execSync("npx next build", { stdio: "inherit", cwd: root, env: process.env });
execSync("node scripts/fix-paths.mjs", { stdio: "inherit", cwd: root, env: process.env });

// Ship the PHP endpoint alongside the static files.
if (existsSync(fileURLToPath(apiSrc))) {
  cpSync(fileURLToPath(apiSrc), fileURLToPath(new URL("api/", outDir)), {
    recursive: true,
  });
  console.log("✓ api/ copied into out/api");
}

console.log(`\n✓ Done. Upload the contents of out/ to the "${base.slice(1)}" folder.\n`);
