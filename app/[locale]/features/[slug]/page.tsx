import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/app/components/json-ld";
import { SiteShell } from "@/app/components/site-shell";
import { getLocaleFromParams } from "@/app/[locale]/layout";
import { getDictionary, localePath, locales } from "@/app/lib/i18n";
import {
  featureSlugs,
  getFeaturePage,
  isFeatureSlug,
  type FeatureSlug,
} from "@/app/lib/feature-pages-i18n";
import { getFeaturePageJsonLd } from "@/app/lib/structured-data";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    featureSlugs.map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata(
  props: PageProps<"/[locale]/features/[slug]">,
): Promise<Metadata> {
  const { locale, slug } = await props.params;
  if (!isFeatureSlug(slug)) {
    return {};
  }
  const currentLocale = getLocaleFromParams(locale);
  const page = getFeaturePage(currentLocale, slug);
  return {
    title: page.seoTitle,
    description: page.seoDescription,
  };
}

export default async function FeatureLandingPage(
  props: PageProps<"/[locale]/features/[slug]">,
) {
  const { locale, slug } = await props.params;
  if (!isFeatureSlug(slug)) {
    notFound();
  }

  const currentLocale = getLocaleFromParams(locale);
  const dict = getDictionary(currentLocale);
  const page = getFeaturePage(currentLocale, slug);
  const jsonLd = getFeaturePageJsonLd(currentLocale, slug);

  return (
    <SiteShell locale={currentLocale} labels={dict}>
      <JsonLd data={jsonLd} />
      <article className="max-w-lg space-y-5">
        <Link
          href={localePath(currentLocale, "/#features")}
          prefetch={false}
          className="pet-link text-xs font-medium"
        >
          ← {dict.common.backToFeatures}
        </Link>
        <div className="space-y-2">
          <h1 className="pet-title text-xl font-semibold">{page.title}</h1>
          <p className="text-sm text-[var(--muted)]">{page.summary}</p>
        </div>
        <Link
          href={`/go?target=chrome&from=feature-${slug}`}
          prefetch={false}
          className="pet-btn-primary inline-flex rounded-full px-5 py-2.5 text-sm font-medium"
        >
          {dict.common.installNow}
        </Link>
      </article>
    </SiteShell>
  );
}
