import type { MetadataRoute } from "next";
import { siteConfig } from "@/app/lib/site-content";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.siteUrl}/sitemap.xml`,
  };
}
