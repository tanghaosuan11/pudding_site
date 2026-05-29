import { SiteShell } from "@/app/components/site-shell";
import { getDictionary } from "@/app/lib/i18n";
import { getLocaleFromParams } from "@/app/[locale]/layout";

export default async function PrivacyPage(props: PageProps<"/[locale]/privacy">) {
  const { locale } = await props.params;
  const currentLocale = getLocaleFromParams(locale);
  const dict = getDictionary(currentLocale);

  return (
    <SiteShell locale={currentLocale} labels={dict}>
      <section className="prose prose-slate max-w-3xl">
        <h1>{dict.footer.privacy}</h1>
        <p>{dict.legal.effectiveDateLabel}: {dict.legal.date}</p>
        <p>{dict.legal.privacyIntro}</p>
      </section>
    </SiteShell>
  );
}
