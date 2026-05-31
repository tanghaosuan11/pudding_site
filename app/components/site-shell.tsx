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
    footer: { privacy: string; terms: string; rights: string };
  };
};

export function SiteShell({ children, locale, mainClassName, labels }: SiteShellProps) {
  return (
    <div className="flex min-h-screen flex-col bg-linear-to-b from-[#f7f9ff] via-[#fcfdff] to-[#eef3ff] text-slate-900">
      <header className="pet-glass fixed inset-x-0 top-0 z-40 border-b backdrop-blur">
        <div className="relative w-full px-6 py-4">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between">
            <Link href={localePath(locale)} prefetch={false} className="pet-brand text-lg font-semibold text-indigo-600">
              {siteConfig.name}
            </Link>
            <nav className="flex items-center gap-5 pr-24 text-xs text-slate-700 md:text-sm">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={localePath(locale, item.href)}
                  prefetch={false}
                  className="hover:text-indigo-600"
                >
                  {labels.nav[item.key as keyof typeof labels.nav]}
                </Link>
              ))}
            </nav>
          </div>
          <div className="absolute right-2 top-1/2 -translate-y-1/2">
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
      <footer className="pet-glass fixed inset-x-0 bottom-0 z-40 border-t backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-6 text-sm text-slate-600">
          <p>© {new Date().getFullYear()} {siteConfig.name}. {labels.footer.rights}</p>
          <div className="flex items-center gap-4">
            <Link href={localePath(locale, "/privacy")} prefetch={false} className="hover:text-indigo-700">
              {labels.footer.privacy}
            </Link>
            <Link href={localePath(locale, "/terms")} prefetch={false} className="hover:text-indigo-700">
              {labels.footer.terms}
            </Link>
          </div>
        </div>
      </footer>
      <DraggablePet />
    </div>
  );
}
