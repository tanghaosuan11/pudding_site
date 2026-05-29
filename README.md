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
2. Set `NEXT_PUBLIC_SITE_URL` to your **primary** domain (no trailing slash), e.g. `https://www.puddpet.com` — must match the URL Vercel redirects to. This also drives `public/sitemap.xml` at build time.
3. Add **both** `puddpet.com` and `www.puddpet.com` in Vercel → **Settings → Domains**; set one as primary redirect.
4. Point DNS in Cloudflare (see **Cloudflare CDN** below).
5. Deploy after env or `next.config.ts` header changes.

## Cloudflare CDN (orange cloud / Proxied)

Traffic: browser → **Cloudflare edge (HK/APAC cache)** → Vercel origin.

### 1. Cloudflare DNS (puddpet.com zone)

Turn **Proxied (orange cloud)** ON for website records only:

| Name | Type | Content | Proxy |
|------|------|---------|-------|
| `www` | CNAME | `….vercel-dns-017.com` (your Vercel target) | **Proxied** |
| `@` | A | `76.76.21.21` | **Proxied** |

Keep **DNS only (grey cloud)** for mail — do not proxy:

- `imap`, `mail`, `pop3`, `smtp` → Aliyun enterprise mail CNAMEs
- `@` MX, SPF TXT, Google verification TXT

### 2. Cloudflare SSL/TLS

- **SSL/TLS** → Overview → **Full (strict)**
- **Edge Certificates** → **Always Use HTTPS** ON

### 3. Cloudflare Caching (optional)

- **Caching** → **Configuration** → Caching Level: **Standard**
- **Speed** → **Optimization** → Brotli: ON

Do **not** add a global “Cache Everything” rule for `/*` — HTML locale pages should stay dynamic. Static assets (`/_next/static/*`, `/images/*`) are cached via `Cache-Control` in `next.config.ts`.

### 4. Verify

```bash
curl -sI https://www.puddpet.com | grep -i cf-
curl -sI https://www.puddpet.com/_next/static/…   # cf-cache-status: HIT after 2nd request
curl -sI "https://www.puddpet.com/go?target=chrome"  # should not be cached (307)
```

Response headers should include `cf-cache-status` and `server: cloudflare`.

### 5. Rollback

If SSL errors (525/526): set affected records back to **DNS only (grey)**, or switch SSL mode to Full temporarily while debugging.

## Related

- Chrome extension repo: `pudding` (Plasmo)
- Store listing: [Pudding on Chrome Web Store](https://chromewebstore.google.com/detail/pudding/cncohpljlopkkmgendpeojjjhnoehfgi)
