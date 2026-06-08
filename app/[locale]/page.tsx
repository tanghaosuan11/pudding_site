import Link from "next/link";
import { FeatureOverview } from "@/app/components/feature-overview";
import { SectionHeading } from "@/app/components/section-heading";
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
        <div className="mx-auto grid min-h-[calc(100svh-9rem)] max-w-6xl gap-8 px-2 py-6 md:grid-cols-2 md:items-center md:px-6">
          <div className="space-y-5">
            <span className="pet-bubble inline-flex px-3 py-1 text-xs font-medium">
              {dict.home.badge}
            </span>
            <h1 className="pet-title text-2xl font-semibold leading-snug md:text-3xl">
              {dict.home.title}
            </h1>
            <p className="max-w-lg text-sm text-[var(--muted)] md:text-[0.9375rem]">
              {dict.home.description}
            </p>
            <div className="flex flex-wrap gap-2.5">
              <Link
                href="/go?target=chrome&from=home-hero"
                prefetch={false}
                className="pet-btn-primary rounded-full px-5 py-2.5 text-sm font-medium"
              >
                {dict.common.installNow}
              </Link>
              <Link
                href={localePath(currentLocale, "/#features")}
                className="pet-btn-secondary rounded-full px-5 py-2.5 text-sm font-medium"
              >
                {dict.common.viewFeatures}
              </Link>
            </div>
          </div>
          <div className="hero-card pet-card rounded-2xl p-6">
            <h2 className="text-base font-semibold text-[var(--pet-primary-strong)]">
              {dict.common.featuresTitle}
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
              {dict.home.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            <div className="mt-4 flex items-end justify-between gap-3">
              <p className="pet-bubble px-3 py-1 text-xs">Hi! I am Pudding 👋</p>
              <div data-pet-home-anchor className="h-[86px] w-[86px] shrink-0" aria-hidden />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="snap-start snap-always min-h-svh">
        <div className="mx-auto flex min-h-[calc(100svh-9rem)] max-w-6xl items-center px-2 py-6 md:px-6">
          <div className="w-full space-y-5">
            <SectionHeading compact title={dict.nav.features} description={dict.features.intro} />
            <FeatureOverview cards={dict.features.cards} learnMore={dict.common.learnMore} />
          </div>
        </div>
      </section>

      <section id="download" className="snap-start snap-always min-h-svh">
        <div className="mx-auto flex min-h-[calc(100svh-9rem)] max-w-6xl items-center px-2 py-6 md:px-6">
          <div className="w-full space-y-5">
            <SectionHeading compact title={dict.nav.download} description={dict.download.intro} />
            <Link
              href="/go?target=chrome&from=download-section"
              className="pet-card pet-card-hover inline-block max-w-sm rounded-xl p-5"
            >
              <h3 className="text-base font-semibold">Chrome</h3>
              <p className="mt-1 text-sm text-[var(--muted)]">{dict.download.chromeDesc}</p>
            </Link>
          </div>
        </div>
      </section>

      <section id="changelog" className="snap-start snap-always min-h-svh">
        <div className="mx-auto flex min-h-[calc(100svh-9rem)] max-w-6xl flex-col justify-center px-2 py-6 md:px-6">
          <SectionHeading compact title={dict.nav.changelog} />
          <div
            className="mt-5 min-h-0 flex-1 overflow-y-auto pr-1"
            style={{ maxHeight: "calc(100svh - 14rem)" }}
          >
            <div className="space-y-4">
              {dict.changelog.entries.map((entry) => (
                <article key={entry.version} className="pet-card rounded-xl p-4">
                  <div className="flex flex-wrap items-center gap-2 text-sm">
                    <span className="pet-bubble px-2 py-0.5 text-xs font-semibold">
                      v{entry.version}
                    </span>
                    <span className="text-[var(--muted)]">{entry.date}</span>
                  </div>
                  <ul className="mt-2 space-y-1 text-sm text-[var(--muted)]">
                    {entry.changes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
