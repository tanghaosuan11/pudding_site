import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  isLocale,
  locales,
  type Locale,
  getDictionary,
  defaultLocale,
} from "@/app/lib/i18n";
import { siteConfig } from "@/app/lib/site-content";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

function toOpenGraphLocale(locale: Locale): string {
  if (locale === "zh_CN") return "zh_CN";
  if (locale === "ja") return "ja_JP";
  if (locale === "ko") return "ko_KR";
  if (locale === "pt_BR") return "pt_BR";
  return "en_US";
}

function toHrefLang(locale: Locale): string {
  if (locale === "zh_CN") return "zh-CN";
  if (locale === "pt_BR") return "pt-BR";
  return locale;
}

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await props.params;
  if (!isLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale);
  const localeUrl = `${siteConfig.siteUrl}/${locale}`;
  const languageAlternates = Object.fromEntries(
    locales.map((item) => [toHrefLang(item), `${siteConfig.siteUrl}/${item}`]),
  );

  return {
    title: {
      default: dict.seo.title,
      template: `%s | ${siteConfig.name}`,
    },
    description: dict.seo.description,
    keywords: dict.seo.keywords,
    alternates: {
      canonical: localeUrl,
      languages: {
        ...languageAlternates,
        "x-default": `${siteConfig.siteUrl}/${defaultLocale}`,
      },
    },
    openGraph: {
      title: dict.seo.ogTitle,
      description: dict.seo.ogDescription,
      url: localeUrl,
      siteName: siteConfig.name,
      locale: toOpenGraphLocale(locale),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.seo.ogTitle,
      description: dict.seo.ogDescription,
    },
  };
}

export default async function LocaleLayout(props: LayoutProps<"/[locale]">) {
  const { locale } = await props.params;
  if (!isLocale(locale)) {
    notFound();
  }

  return <>{props.children}</>;
}

export function getLocaleFromParams(locale: string): Locale {
  if (!isLocale(locale)) {
    notFound();
  }
  return locale;
}
