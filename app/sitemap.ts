import type { MetadataRoute } from "next";
import { locales } from "@/app/lib/i18n";
import { siteConfig } from "@/app/lib/site-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const localizedRoutes = locales.flatMap((locale) => [
    `/${locale}`,
    `/${locale}/features`,
    `/${locale}/download`,
    `/${locale}/changelog`,
    `/${locale}/privacy`,
    `/${locale}/terms`,
  ]);

  return localizedRoutes.map((route) => ({
    url: `${siteConfig.siteUrl}${route}`,
    lastModified: new Date(siteConfig.updatedAt),
    changeFrequency: "weekly",
    priority: route.split("/").length === 2 ? 1 : 0.7,
  }));
}
