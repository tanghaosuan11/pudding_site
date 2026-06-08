import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/app/components/json-ld";
import { SiteShell } from "@/app/components/site-shell";
import { getDictionary } from "@/app/lib/i18n";
import { getFaqPageJsonLd } from "@/app/lib/structured-data";
import { getLocaleFromParams } from "@/app/[locale]/layout";

export async function generateMetadata(props: PageProps<"/[locale]/faq">): Promise<Metadata> {
  const { locale } = await props.params;
  const dict = getDictionary(getLocaleFromParams(locale));
  return {
    title: dict.faq.seoTitle,
    description: dict.faq.seoDescription,
  };
}

export default async function FaqPage(props: PageProps<"/[locale]/faq">) {
  const { locale } = await props.params;
  const currentLocale = getLocaleFromParams(locale);
  const dict = getDictionary(currentLocale);
  const jsonLd = getFaqPageJsonLd(currentLocale);

  return (
    <SiteShell locale={currentLocale} labels={dict}>
      <JsonLd data={jsonLd} />
      <section className="max-w-3xl space-y-8">
        <div className="space-y-3">
          <h1 className="pet-title text-3xl font-semibold text-slate-900">{dict.faq.title}</h1>
          <p className="text-slate-600">{dict.faq.intro}</p>
        </div>
        <div className="space-y-4">
          {dict.faq.items.map((item) => (
            <article key={item.question} className="pet-card rounded-2xl p-6">
              <h2 className="pet-title text-lg font-medium text-indigo-700">{item.question}</h2>
              <p className="mt-3 text-slate-600">{item.answer}</p>
            </article>
          ))}
        </div>
        <div>
          <Link
            href="/go?target=chrome&from=faq"
            prefetch={false}
            className="pet-btn-primary inline-flex rounded-full px-6 py-3 text-sm font-semibold"
          >
            {dict.faq.installCta}
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
