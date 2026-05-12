# bugalgo.com

Static site for [bugalgo.com](https://bugalgo.com) — built with Astro + React + Tailwind CSS 4.

## Tech stack

- [Astro](https://astro.build) v5 (static output)
- React 19 (client islands via `client:load`)
- Tailwind CSS v4 via `@tailwindcss/vite`
- TypeScript strict mode

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output goes to `dist/`. GitHub Actions deploys the `dist/` directory to GitHub Pages.

## Preview

```bash
npm run preview
```

## Structure

```
src/
  pages/            # Astro pages (file-based routing)
  components/site/  # React island components
  i18n/             # TR/EN dictionaries + LanguageProvider
  lib/              # Product metadata and store URLs
  layouts/          # Base.astro HTML shell
  styles.css        # Tailwind 4 + custom design tokens
public/
  CNAME             # bugalgo.com
  app-ads.txt
  google6a5136bdf9069662.html
  images/
legacy/             # Previous static HTML site (archived)
```

## Critical URLs

These URLs are indexed by Google Search Console and referenced in app store listings. They must remain functional:

- `/products/acikeczane/`
- `/products/acikeczane/privacy/`
- `/products/acikeczane/terms/`
- `/products/acikeczane/support/`
- `/products/sinavkocu/`
- `/products/sinavkocu/privacy/`
- `/products/sinavkocu/terms/`
- `/products/sinavkocu/support/`
- `/products/lumnos/`
- `/products/lumnos/privacy/`
- `/products/lumnos/terms/`
- `/products/lumnos/support/`
- `/products/lumnos/account-deletion/`
