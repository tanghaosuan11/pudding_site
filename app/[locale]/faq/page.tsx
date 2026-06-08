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
      <section className="max-w-lg space-y-5">
        <h1 className="pet-title text-xl font-semibold">{dict.faq.title}</h1>
        <dl className="space-y-4">
          {dict.faq.items.map((item) => (
            <div key={item.question} className="border-b border-[var(--pet-border)] pb-4 last:border-0">
              <dt className="text-sm font-medium text-[var(--foreground)]">{item.question}</dt>
              <dd className="mt-1 text-sm text-[var(--muted)]">{item.answer}</dd>
            </div>
          ))}
        </dl>
        <Link
          href="/go?target=chrome&from=faq"
          prefetch={false}
          className="pet-btn-primary inline-flex rounded-full px-5 py-2.5 text-sm font-medium"
        >
          {dict.faq.installCta}
        </Link>
      </section>
    </SiteShell>
  );
}
