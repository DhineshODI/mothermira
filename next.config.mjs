/** @type {import('next').NextConfig} */

/* ================================================================
   STATIC EXPORT
   The deploy folder is NOT hardcoded here — it comes from EXPORT_BASE,
   set by scripts/build-export.mjs:

     npm run build:dev   ->  basePath /mother-mira-with-form

   `npm run dev` and a plain `npm run build` have no base path.
   ================================================================ */
const isExport =
  process.env.STATIC_EXPORT === "true" || process.env.BUILD_MODE === "export";

const BASE_PATH = isExport ? process.env.EXPORT_BASE || "" : "";

const nextConfig = {
  compress: true,
  productionBrowserSourceMaps: true,

  ...(isExport && {
    output: "export",
    basePath: BASE_PATH,
    trailingSlash: true,
  }),

  images: {
    unoptimized: isExport, // next/image optimization needs a running server
  },
};

export default nextConfig;
