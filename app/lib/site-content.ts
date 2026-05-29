const CHROME_WEB_STORE_URL =
  "https://chromewebstore.google.com/detail/pudding/cncohpljlopkkmgendpeojjjhnoehfgi";

export const siteConfig = {
  name: "Pudding",
  description:
    "A smart pet companion with screenshots, mini games, Pomodoro timer, and reminders.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://pudding-site.vercel.app",
  version: "0.0.2",
  updatedAt: "2026-05-28",
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
