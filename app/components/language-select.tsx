"use client";

import { usePathname, useRouter } from "next/navigation";
import { isLocale, localeLabels, locales, type Locale } from "@/app/lib/i18n";

function buildLocalePath(pathname: string, nextLocale: Locale): string {
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 0) {
    return `/${nextLocale}`;
  }

  if (isLocale(segments[0])) {
    segments[0] = nextLocale;
  } else {
    segments.unshift(nextLocale);
  }

  return `/${segments.join("/")}`;
}

export function LanguageSelect({ locale }: { locale: Locale }) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <select
      value={locale}
      aria-label="Language selector"
      className="h-8 rounded-md border border-slate-300 bg-white px-2 text-xs text-slate-700 focus:border-indigo-400 focus:outline-none md:text-sm"
      onChange={(event) => {
        const nextLocale = event.target.value as Locale;
        router.push(buildLocalePath(pathname, nextLocale));
      }}
    >
      {locales.map((item) => (
        <option key={item} value={item}>
          {localeLabels[item]}
        </option>
      ))}
    </select>
  );
}
