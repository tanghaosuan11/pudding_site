const CHROME_WEB_STORE_URL =
  "https://chromewebstore.google.com/detail/pudding/cncohpljlopkkmgendpeojjjhnoehfgi";

const DEFAULT_SITE_URL = "https://pudding-site.vercel.app";

function normalizeSiteUrl(raw: string | undefined): string {
  const trimmed = (raw?.trim() || DEFAULT_SITE_URL).replace(/\/$/, "");
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    return trimmed;
  }
  return `https://${trimmed}`;
}

export const siteConfig = {
  name: "Pudding",
  brandAlternateName: "Puddpet",
  description:
    "A smart pet companion with screenshots, mini games, Pomodoro timer, and reminders.",
  siteUrl: normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL),
  /** Social / Open Graph preview (absolute URL built via metadataBase). */
  ogImagePath: "/images/doge_normal.webp",
  version: "0.0.4",
  updatedAt: "2026-06-01",
  requirements: "Chrome 114+ / Edge 114+",
  downloadTargets: {
    chrome: process.env.NEXT_PUBLIC_CHROME_STORE_URL || CHROME_WEB_STORE_URL,
    edge:
      process.env.NEXT_PUBLIC_EDGE_STORE_URL || CHROME_WEB_STORE_URL,
    github:
      process.env.NEXT_PUBLIC_GITHUB_RELEASE_URL ||
      "https://github.com/tanghaosuan/pudding/releases",
  },
};

export const navItems = [
  { href: "/#home", key: "home" },
  { href: "/#features", key: "features" },
  { href: "/#download", key: "download" },
  { href: "/#changelog", key: "changelog" },
];
