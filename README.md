# Portfolio — Ashvini Kumar

A fast, minimal, premium personal portfolio built with **Astro 7**, **Tailwind CSS 4**, and **TypeScript**. Static output, minimal JS, dark/light theme, command palette, blog with content collections, and full SEO.

## Requirements

- **Node ≥ 22.12** (this repo is pinned to `24.16.0` via `.nvmrc` — run `nvm use`).
- **TypeScript is pinned to 5.x** on purpose. `astro check` does not yet support the TS 7 native compiler, so do not upgrade `typescript` past `^5`.

## Commands

```bash
nvm use            # switch to Node 24 (reads .nvmrc)
pnpm install       # install dependencies
pnpm dev           # start dev server
pnpm build         # astro check + astro build -> dist/
pnpm preview       # serve the production build
```

## Before you deploy

Edit these:

1. `astro.config.mjs` → `SITE` — your production domain (drives canonical URLs, sitemap, RSS, OG image URLs).
2. `src/data/site.ts` → name, role, email, socials, `url`, `twitterHandle`.
3. `public/resume.pdf` — replace the placeholder with your real CV.
4. `public/images/portrait.svg` — replace with a real photo (update the path in `src/data/about.ts` if you use a `.jpg`).
5. `public/images/**` and `public/og/default.svg` — swap the generated placeholders for real artwork.

## Editing content

All page content is data-driven — edit the data, not the markup:

| Section | File |
| --- | --- |
| Identity, nav, socials | `src/data/site.ts` |
| About / philosophy | `src/data/about.ts` |
| Tech stack | `src/data/stack.ts` |
| Experience timeline | `src/data/experience.ts` |
| Projects (+ case studies) | `src/data/projects.ts` |
| Engineering highlights | `src/data/highlights.ts` |
| AI development | `src/data/ai.ts` |
| Blog posts | `src/content/blog/*.md` |

## Structure

```
src/
  components/
    ui/          reusable primitives (Button, Section, Icon, ...)
    layout/      Header, Footer, CommandPalette, BackToTop, ThemeToggle
    sections/    homepage sections (Hero, About, ...)
    blog/        PostCard
    Seo.astro    meta + Open Graph + Twitter + JSON-LD
  content/       blog collection (content.config.ts defines the schema)
  data/          single source of truth for all site content
  layouts/       BaseLayout (head, theme, view transitions, chrome)
  pages/         routes (index, blog, projects, rss.xml, robots.txt, 404)
  scripts/       progressive enhancement (reveal, palette, counters, ...)
  styles/        global.css — Tailwind 4 CSS-first tokens + theme
public/
  scripts/theme-init.js   render-blocking no-flash theme bootstrap
```

## Features

Command palette (`⌘K` / `/`), keyboard nav, view transitions, scroll progress, animated counters, dark/light theme (no flash), copy-email, blog search + category filter, reading progress, lazy images, sitemap, RSS, robots.txt, `site.webmanifest`, Open Graph + Twitter cards, Schema.org JSON-LD, canonical URLs. Fully responsive, keyboard accessible, and reduced-motion aware.
