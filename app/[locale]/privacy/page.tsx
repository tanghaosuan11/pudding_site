import type { Metadata } from "next";
import { SiteShell } from "@/app/components/site-shell";
import { getDictionary } from "@/app/lib/i18n";
import { getPrivacyPolicy } from "@/app/lib/privacy-policy";
import { getLocaleFromParams } from "@/app/[locale]/layout";

export async function generateMetadata(props: PageProps<"/[locale]/privacy">): Promise<Metadata> {
  const { locale } = await props.params;
  const policy = getPrivacyPolicy(getLocaleFromParams(locale));
  return {
    title: policy.title,
    description: policy.intro,
  };
}

export default async function PrivacyPage(props: PageProps<"/[locale]/privacy">) {
  const { locale } = await props.params;
  const currentLocale = getLocaleFromParams(locale);
  const dict = getDictionary(currentLocale);
  const policy = getPrivacyPolicy(currentLocale);

  return (
    <SiteShell locale={currentLocale} labels={dict} mainClassName="mx-auto w-full max-w-3xl flex-1 px-6 pb-24 pt-24">
      <article className="prose prose-slate max-w-none prose-headings:pet-title prose-h2:text-xl prose-h2:font-medium">
        <h1>{policy.title}</h1>
        <p className="text-sm text-slate-500">
          {policy.effectiveDateLabel}: {policy.date}
        </p>
        <p>{policy.intro}</p>

        {policy.sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.list ? (
              <ul>
                {section.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
      </article>
    </SiteShell>
  );
}
