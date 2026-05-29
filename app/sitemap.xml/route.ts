import { NextResponse } from "next/server";
import { locales } from "@/app/lib/i18n";
import { siteConfig } from "@/app/lib/site-content";

export const dynamic = "force-static";

const localizedRoutes = locales.flatMap((locale) => [
  `/${locale}`,
  `/${locale}/features`,
  `/${locale}/download`,
  `/${locale}/changelog`,
  `/${locale}/privacy`,
  `/${locale}/terms`,
]);

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const base = siteConfig.siteUrl.replace(/\/$/, "");
  const lastmod = siteConfig.updatedAt;

  const body = localizedRoutes
    .map((route) => {
      const priority = route.split("/").length === 2 ? "1.0" : "0.7";
      const loc = escapeXml(`${base}${route}`);
      return `<url><loc>${loc}</loc><lastmod>${lastmod}</lastmod><changefreq>weekly</changefreq><priority>${priority}</priority></url>`;
    })
    .join("");

  const xml =
    `<?xml version="1.0" encoding="UTF-8"?>` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${body}</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
