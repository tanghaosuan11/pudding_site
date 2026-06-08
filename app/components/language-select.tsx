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
      className="pet-select h-8 px-3 text-xs font-medium focus:outline-none md:text-sm"
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
