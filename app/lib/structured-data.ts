import { getFeaturePage, type FeatureSlug } from "@/app/lib/feature-pages-i18n";
import { getDictionary, type Locale } from "@/app/lib/i18n";
import { siteConfig } from "@/app/lib/site-content";

function localeToSchemaLanguage(locale: Locale): string {
  if (locale === "zh_CN") return "zh-CN";
  if (locale === "pt_BR") return "pt-BR";
  return locale;
}

export function getFaqPageJsonLd(locale: Locale): Record<string, unknown> {
  const dict = getDictionary(locale);
  const pageUrl = `${siteConfig.siteUrl}/${locale}/faq`;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    url: pageUrl,
    inLanguage: localeToSchemaLanguage(locale),
    mainEntity: dict.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function getFeaturePageJsonLd(
  locale: Locale,
  slug: FeatureSlug,
): Record<string, unknown> {
  const page = getFeaturePage(locale, slug);
  const pageUrl = `${siteConfig.siteUrl}/${locale}/features/${slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: page.seoTitle,
    description: page.seoDescription,
    inLanguage: localeToSchemaLanguage(locale),
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: `${siteConfig.siteUrl}/${locale}`,
    },
    about: {
      "@type": "SoftwareApplication",
      name: siteConfig.name,
      applicationCategory: "BrowserApplication",
      operatingSystem: "Chrome, Microsoft Edge",
    },
  };
}

export function getSoftwareApplicationJsonLd(locale: Locale): Record<string, unknown> {
  const dict = getDictionary(locale);
  const pageUrl = `${siteConfig.siteUrl}/${locale}`;
  const imageUrl = `${siteConfig.siteUrl}${siteConfig.ogImagePath}`;

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${pageUrl}#software`,
    name: siteConfig.name,
    alternateName: siteConfig.brandAlternateName,
    url: pageUrl,
    image: imageUrl,
    description: dict.seo.description,
    applicationCategory: "BrowserApplication",
    applicationSubCategory: "Chrome Extension",
    operatingSystem: "Chrome, Microsoft Edge",
    softwareVersion: siteConfig.version,
    inLanguage: localeToSchemaLanguage(locale),
    browserRequirements: siteConfig.requirements,
    featureList: dict.seo.keywords,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: siteConfig.downloadTargets.chrome,
    },
    downloadUrl: siteConfig.downloadTargets.chrome,
    installUrl: siteConfig.downloadTargets.chrome,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.siteUrl,
    },
  };
}
