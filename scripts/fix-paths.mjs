/**
 * Post-build: prefix hardcoded public-folder paths with the export base path.
 *
 * Next's basePath rewrites next/image, next/link and router URLs — but NOT raw
 * <img src="/images/...">, <video src="...">, or url("/fonts/...") in CSS.
 * This walks out/ and prefixes those.
 *
 * The base comes from EXPORT_BASE — never hardcode a folder name here.
 */
import { readdirSync, readFileSync, writeFileSync, statSync } from "fs";
import { join } from "path";
import { fileURLToPath } from "url";

const BASE = (process.env.EXPORT_BASE || "").replace(/\/$/, "");

if (!BASE) {
  console.log("No EXPORT_BASE set — skipping path fixing.");
  process.exit(0);
}

const OUT = fileURLToPath(new URL("../out", import.meta.url));
const EXTS = [".html", ".js", ".css", ".txt", ".json"];

// Public sub-folders whose absolute paths appear literally in the source.
const FOLDERS = ["images", "fonts", "pdf", "videos"];

const escaped = BASE.replace(/[.*+?^${}()|[\]\\/]/g, "\\$&");
const patterns = FOLDERS.map((f) => ({
  re: new RegExp(`(?<!${escaped})\\/${f}\\/`, "g"),
  to: `${BASE}/${f}/`,
}));

let touched = 0;

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) {
      walk(p);
    } else if (EXTS.some((e) => name.endsWith(e))) {
      const src = readFileSync(p, "utf8");
      let fixed = src;
      for (const { re, to } of patterns) fixed = fixed.replace(re, to);
      if (fixed !== src) {
        writeFileSync(p, fixed);
        touched++;
      }
    }
  }
}

walk(OUT);
console.log(`✓ Asset paths prefixed with ${BASE} (${touched} files updated)`);
