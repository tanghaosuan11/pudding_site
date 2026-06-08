import { writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const locales = ["en", "zh_CN", "ja", "ko", "pt_BR"];
const suffixes = ["", "/features", "/download", "/changelog", "/faq", "/privacy", "/terms"];
const base = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.puddpet.com").replace(/\/$/, "");
const lastmod = process.env.SITEMAP_LASTMOD || "2026-05-28";

function escapeXml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

const urls = locales.flatMap((locale) =>
  suffixes.map((suffix) => {
    const path = `/${locale}${suffix}`;
    const priority = path.split("/").length === 2 ? "1.0" : "0.7";
    const loc = escapeXml(`${base}${path}`);
    return `<url><loc>${loc}</loc><lastmod>${lastmod}</lastmod><changefreq>weekly</changefreq><priority>${priority}</priority></url>`;
  }),
);

const xml =
  `<?xml version="1.0" encoding="UTF-8"?>` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.join("")}</urlset>`;

const outPath = join(root, "public", "sitemap.xml");
writeFileSync(outPath, xml, "utf8");
console.log(`Wrote ${outPath} (${urls.length} URLs, base=${base})`);
