# i18n Context for `pudding_site`

This site must always be implemented with full multilingual support.

## Supported Locales

- `en`
- `zh_CN`
- `ja`
- `ko`
- `pt_BR`

## Non-negotiable Rules

- Any new UI text must be added to the i18n dictionary in `app/lib/i18n.ts`.
- Do not hardcode user-facing copy in page files or components.
- If a feature introduces labels, hints, empty states, errors, legal copy, or CTA text, all five locales must be updated in the same change.
- Locale routes must stay under `app/[locale]/...`.
- Keep root routes as redirects to `defaultLocale` only.

## Layout Requirement

- Footer must stay visually pinned to the bottom of the viewport on short pages.

## Validation Checklist

- Run `pnpm lint`.
- Run `pnpm build`.
- Check at least one route per locale, e.g. `/en`, `/zh_CN`, `/ja`, `/ko`, `/pt_BR`.
