# suli.nyc

Personal portfolio site for Stephen Sulimani, built as a static Astro project with a React island for the interactive experience.

## Stack

- **[Astro](https://astro.build/)** — static site generation, layouts, and routing
- **[React](https://react.dev/)** — portfolio UI hydrated with `client:load` so [Framer Motion](https://www.framer.com/motion/) scroll effects, keyboard shortcuts, and shared state stay in one tree
- **TypeScript** — `tsconfig.json` extends `astro/tsconfigs/strict`
- **[Fontsource](https://fontsource.org/)** — self-hosted Instrument Serif and Source Sans 3 (Latin subsets) in `src/layouts/Layout.astro`
- **[react-ga4](https://www.npmjs.com/package/react-ga4)** — analytics events from the React app

## Scripts

| Command           | Description                      |
| ----------------- | -------------------------------- |
| `bun run dev`     | Start Astro dev server           |
| `bun run build`   | Production build → `dist/`       |
| `bun run preview` | Serve the `dist/` output locally |
| `bun run lint`    | Run ESLint on TS/TSX sources     |

## Project layout

- `src/pages/` — file-based routes (`index.astro` is the homepage)
- `src/layouts/Layout.astro` — document shell, fonts, `<title>`
- `src/App.tsx` — root React component (island entry)
- `src/components/` — portfolio sections and UI
- `src/lib/github-calendar-loader.ts` — lazy-loads the GitHub contributions widget when the activity section nears the viewport
- `public/` — static assets (`robots.txt`, icons, images)

## Configuration notes

- **`astro.config.mjs`** — `site` is set to `https://suli.nyc` for [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/). Change it if the canonical URL changes, and update `public/robots.txt` so the `Sitemap:` line matches.
- **ESLint** ignores the generated `.astro` directory (see `eslint.config.js`).
