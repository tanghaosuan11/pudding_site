import Link from "next/link";
import { SiteShell } from "@/app/components/site-shell";
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
        <section id="home" className="snap-start snap-always min-h-svh">
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
                  prefetch={false}
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
                <div
                  data-pet-home-anchor
                  className="h-[86px] w-[86px] shrink-0"
                  aria-hidden
                />
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="snap-start snap-always min-h-svh">
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
                    <p className="mt-2 text-sm text-slate-500">{card.longDetail}</p>
                    <Link
                      href={localePath(currentLocale, `/features/${card.slug}`)}
                      prefetch={false}
                      className="mt-4 inline-flex text-sm font-semibold text-indigo-600 hover:text-indigo-800"
                    >
                      {dict.common.learnMore} →
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="download" className="snap-start snap-always min-h-svh">
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

        <section id="changelog" className="snap-start snap-always min-h-svh">
          <div className="mx-auto flex min-h-[calc(100svh-9rem)] max-w-6xl flex-col justify-center px-6 pb-10 pt-32">
            <h2 className="pet-title mb-6 text-3xl font-medium text-slate-900">{dict.nav.changelog}</h2>
            <div className="min-h-0 flex-1 overflow-y-auto pr-2" style={{ maxHeight: "calc(100svh - 16rem)" }}>
              <div className="relative pl-6">
                <div className="absolute bottom-0 left-2 top-2 w-px bg-indigo-100" />
                <div className="space-y-6">
                  {dict.changelog.entries.map((entry) => (
                    <div key={entry.version} className="relative">
                      <div className="absolute -left-6 top-5 h-3 w-3 rounded-full border-2 border-indigo-400 bg-white" />
                      <article className="pet-card rounded-2xl p-5">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="pet-bubble px-2.5 py-0.5 text-sm font-semibold">v{entry.version}</span>
                          <span className="text-sm text-slate-400">{entry.date}</span>
                        </div>
                        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-600">
                          {entry.changes.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </article>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
    </SiteShell>
  );
}
