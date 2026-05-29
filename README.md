# Pudding Site

Official marketing site for [Pudding](https://chromewebstore.google.com/detail/pudding/cncohpljlopkkmgendpeojjjhnoehfgi) — a Chrome desktop pet extension with screenshots, mini games, Pomodoro, and reminders.

Lightweight single-page experience: showcase, download, changelog, privacy, and terms. Built for deployment on Vercel.

## Features

- **5 locales**: `en`, `zh_CN`, `ja`, `ko`, `pt_BR` (default `zh_CN`)
- **Single-page sections**: home, features, download, changelog (smooth scroll + snap)
- **Download tracking**: `/go?target=chrome&from=...` → Chrome Web Store with UTM params
- **SEO**: long-tail per-locale metadata, Open Graph image, `SoftwareApplication` JSON-LD, `sitemap.xml`, `robots.txt`, hreflang alternates

## Tech Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS 4
- Static generation for locale routes

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) — redirects to `/zh_CN`.

```bash
pnpm lint
pnpm build
pnpm start   # production preview
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (e.g. `https://puddpet.com`) |
| `NEXT_PUBLIC_CHROME_STORE_URL` | Override Chrome Web Store link (optional) |

## Project Structure

```
app/
  [locale]/          # Localized pages (home, privacy, terms, …)
  go/route.ts        # Download redirect + analytics log
  lib/
    i18n.ts          # All user-facing copy (5 languages)
    site-content.ts  # Site config, store URLs, version
  components/        # SiteShell, LanguageSelect, …
docs/
  i18n-context.md    # i18n rules for contributors / agents
```

## i18n

All UI strings live in `app/lib/i18n.ts`. Do not hardcode copy in pages. See [docs/i18n-context.md](docs/i18n-context.md).

## Deploy (Vercel)

1. Import repo in [Vercel](https://vercel.com).
2. Set `NEXT_PUBLIC_SITE_URL` to your production domain.
3. Add domain in Vercel → **Settings → Domains**.
4. Point DNS (e.g. Cloudflare):
   - `@` → A `76.76.21.21`
   - `www` → CNAME `cname.vercel-dns.com`

## Related

- Chrome extension repo: `pudding` (Plasmo)
- Store listing: [Pudding on Chrome Web Store](https://chromewebstore.google.com/detail/pudding/cncohpljlopkkmgendpeojjjhnoehfgi)
