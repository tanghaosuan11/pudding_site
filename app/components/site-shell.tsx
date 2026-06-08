import Link from "next/link";
import { navItems, siteConfig } from "@/app/lib/site-content";
import type { Locale } from "@/app/lib/i18n";
import { localePath } from "@/app/lib/i18n";
import { LanguageSelect } from "@/app/components/language-select";
import { DraggablePet } from "@/app/components/draggable-pet";

type SiteShellProps = {
  children: React.ReactNode;
  locale: Locale;
  mainClassName?: string;
  labels: {
    nav: { home: string; features: string; download: string; changelog: string };
    footer: {
      privacy: string;
      terms: string;
      faq: string;
      rights: string;
      chromeOfficial: string;
    };
    pet: { feed: string; pat: string };
  };
};

export function SiteShell({ children, locale, mainClassName, labels }: SiteShellProps) {
  return (
    <div className="pet-page-bg flex min-h-screen flex-col text-[var(--foreground)]">
      <header className="pet-glass fixed inset-x-0 top-0 z-40 border-b backdrop-blur-md">
        <div className="relative w-full px-6 py-3.5">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
            <Link
              href={localePath(locale)}
              prefetch={false}
              className="pet-brand flex items-center gap-2 text-lg font-semibold"
            >
              <img
                src="/images/doge_thumb.webp"
                alt=""
                width={32}
                height={32}
                className="h-8 w-8 rounded-full border-2 border-[#f0dcc8] bg-[#fff4e8] object-contain shadow-sm"
              />
              {siteConfig.name}
            </Link>
            <nav className="flex items-center gap-1 pr-24 text-xs md:gap-2 md:text-sm">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={localePath(locale, item.href)}
                  prefetch={false}
                  className="pet-nav-link font-medium"
                >
                  {labels.nav[item.key as keyof typeof labels.nav]}
                </Link>
              ))}
            </nav>
          </div>
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <LanguageSelect locale={locale} />
          </div>
        </div>
      </header>
      <main
        className={
          mainClassName ??
          "mx-auto w-full max-w-6xl min-h-0 flex-1 overflow-y-auto px-6 pb-24 pt-24"
        }
      >
        {children}
      </main>
      <footer className="pet-glass fixed inset-x-0 bottom-0 z-40 border-t backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-3.5 text-xs text-[var(--muted)]">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. {labels.footer.rights}
          </p>
          <div className="flex items-center gap-4">
            <Link href={localePath(locale, "/faq")} prefetch={false} className="pet-link font-medium">
              {labels.footer.faq}
            </Link>
            <Link href={localePath(locale, "/privacy")} prefetch={false} className="pet-link font-medium">
              {labels.footer.privacy}
            </Link>
            <Link href={localePath(locale, "/terms")} prefetch={false} className="pet-link font-medium">
              {labels.footer.terms}
            </Link>
          </div>
        </div>
      </footer>
      <DraggablePet labels={labels.pet} />
    </div>
  );
}
