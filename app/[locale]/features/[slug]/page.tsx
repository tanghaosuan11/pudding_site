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
import { siteConfig } from "@/app/lib/site-content";
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
  const otherSlugs = featureSlugs.filter((item) => item !== slug);

  return (
    <SiteShell locale={currentLocale} labels={dict}>
      <JsonLd data={jsonLd} />
      <article className="max-w-3xl space-y-10">
        <div className="space-y-4">
          <Link
            href={localePath(currentLocale, "/#features")}
            prefetch={false}
            className="text-sm text-indigo-600 hover:text-indigo-800"
          >
            ← {dict.common.backToFeatures}
          </Link>
          <h1 className="pet-title text-3xl font-semibold text-slate-900 md:text-4xl">
            {page.title}
          </h1>
          <p className="text-lg text-slate-600">{page.intro}</p>
        </div>

        <div className="space-y-6">
          {page.sections.map((section) => (
            <section key={section.heading} className="pet-card rounded-2xl p-6">
              <h2 className="pet-title text-xl font-medium text-indigo-700">{section.heading}</h2>
              <p className="mt-3 text-slate-600">{section.body}</p>
            </section>
          ))}
        </div>

        <section className="pet-card rounded-2xl p-6">
          <h2 className="pet-title text-lg font-medium text-indigo-700">{siteConfig.name}</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
            {page.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <div className="flex flex-wrap gap-3">
          <Link
            href={`/go?target=chrome&from=feature-${slug}`}
            prefetch={false}
            className="pet-btn-primary rounded-full px-6 py-3 text-sm font-semibold"
          >
            {dict.common.installNow}
          </Link>
          <Link
            href={localePath(currentLocale, "/faq")}
            prefetch={false}
            className="pet-btn-secondary rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:text-indigo-700"
          >
            {dict.footer.faq}
          </Link>
        </div>

        <section className="space-y-3 border-t border-indigo-100 pt-8">
          <h2 className="pet-title text-lg font-medium text-slate-900">{dict.common.otherFeatures}</h2>
          <div className="flex flex-wrap gap-3">
            {otherSlugs.map((other) => (
              <FeatureLink
                key={other}
                locale={currentLocale}
                slug={other}
                label={dict.features.cards.find((card) => card.slug === other)?.title ?? other}
              />
            ))}
          </div>
        </section>
      </article>
    </SiteShell>
  );
}

function FeatureLink({
  locale,
  slug,
  label,
}: {
  locale: ReturnType<typeof getLocaleFromParams>;
  slug: FeatureSlug;
  label: string;
}) {
  return (
    <Link
      href={localePath(locale, `/features/${slug}`)}
      prefetch={false}
      className="pet-bubble px-4 py-2 text-sm font-medium text-indigo-700 hover:bg-indigo-50"
    >
      {label}
    </Link>
  );
}
