import Image from "next/image";
import Link from "next/link";
import { SiteShell } from "@/app/components/site-shell";
import { siteConfig } from "@/app/lib/site-content";
import { getDictionary, localePath } from "@/app/lib/i18n";
import { getLocaleFromParams } from "@/app/[locale]/layout";

export default async function HomePage(props: PageProps<"/[locale]">) {
  const { locale } = await props.params;
  const currentLocale = getLocaleFromParams(locale);
  const dict = getDictionary(currentLocale);

  return (
    <SiteShell
      locale={currentLocale}
      labels={dict}
      mainClassName="mx-auto w-full max-w-6xl min-h-0 flex-1 snap-y snap-mandatory overflow-y-auto px-6 pb-28 pt-24"
    >
        <section id="home" className="snap-start snap-always">
          <div className="mx-auto grid min-h-[calc(100svh-9rem)] max-w-6xl gap-10 px-6 py-10 md:grid-cols-2 md:items-center">
            <div className="space-y-6">
              <span className="pet-bubble inline-flex px-3 py-1 text-xs font-medium">
                {dict.home.badge}
              </span>
              <h1 className="pet-title text-3xl font-semibold text-slate-900 md:text-4xl">
                {dict.home.title}
              </h1>
              <p className="max-w-xl text-base text-slate-600">{dict.home.description}</p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/go?target=chrome&from=home-hero"
                  className="pet-btn-primary rounded-full px-6 py-3 text-sm font-semibold"
                >
                  {dict.common.installNow}
                </Link>
                <Link
                  href={localePath(currentLocale, "/#features")}
                  className="pet-btn-secondary rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:text-indigo-700"
                >
                  {dict.common.viewFeatures}
                </Link>
              </div>
            </div>
            <div className="pet-card rounded-3xl p-8">
              <div className="space-y-4">
                <h2 className="pet-title text-xl font-medium text-indigo-700">{dict.common.featuresTitle}</h2>
                <ul className="space-y-3 text-slate-700">
                  {dict.home.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 flex items-end justify-between">
                <p className="pet-bubble px-3 py-1 text-xs">Hi! I am Pudding 👋</p>
                <Image
                  src="/images/doge_normal.webp"
                  alt="Pudding pet"
                  width={86}
                  height={86}
                  className="h-auto w-[86px] drop-shadow-md"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="snap-start snap-always">
          <div className="mx-auto flex min-h-[calc(100svh-9rem)] max-w-6xl items-center px-6 py-10">
            <div className="w-full space-y-8">
              <div className="space-y-3">
                <h2 className="pet-title text-3xl font-medium text-slate-900">{dict.nav.features}</h2>
                <p className="max-w-2xl text-slate-600">{dict.features.intro}</p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {dict.features.cards.map((card) => (
                  <article key={card.title} className="pet-card pet-card-hover rounded-2xl p-6">
                    <h3 className="pet-title text-xl font-medium text-indigo-700">{card.title}</h3>
                    <p className="mt-2 text-slate-600">{card.detail}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="download" className="snap-start snap-always">
          <div className="mx-auto flex min-h-[calc(100svh-9rem)] max-w-6xl items-center px-6 py-10">
            <div className="w-full space-y-8">
              <div className="space-y-3">
                <h2 className="pet-title text-3xl font-medium text-slate-900">{dict.nav.download}</h2>
                <p className="text-slate-600">{dict.download.intro}</p>
              </div>
              <div className="mx-auto max-w-md">
                <Link
                  href="/go?target=chrome&from=download-section"
                  className="pet-card pet-card-hover block rounded-2xl p-6"
                >
                  <h3 className="pet-title text-lg font-medium text-indigo-700">Chrome</h3>
                  <p className="mt-2 text-sm text-slate-600">{dict.download.chromeDesc}</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="changelog" className="snap-start snap-always">
          <div className="mx-auto flex min-h-[calc(100svh-9rem)] max-w-6xl items-center px-6 py-10">
            <div className="w-full space-y-6">
              <h2 className="pet-title text-3xl font-medium text-slate-900">{dict.nav.changelog}</h2>
              <div className="max-h-[58svh] overflow-y-auto pr-2">
                <article className="pet-card rounded-2xl p-6">
                  <p className="text-sm text-slate-500">{dict.legal.date}</p>
                  <h3 className="pet-title text-xl font-medium text-indigo-700">{siteConfig.version}</h3>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-600">
                    {dict.changelog.changes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              </div>
            </div>
          </div>
        </section>
    </SiteShell>
  );
}
