# Omed Hossaini — Portfolio

A single-page developer portfolio. **React + Vite**, plain CSS with design
tokens, **Space Grotesk**. Static, no backend. Deploys to Vercel.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
npm run preview  # preview the production build
```

## Where things live

- **Content & links:** [`src/data.js`](src/data.js) — all copy, projects,
  interests, skills, achievements, and social links. Edit here; the UI updates.
- **Design tokens & styles:** [`src/index.css`](src/index.css) — colors, type,
  spacing, hover states. The accent is one variable: `--acc` (`#ff4d2e`).
- **Sections:** `src/components/` — `Nav`, `Hero`, `Marquee`, `SelectedWork`,
  `About`, `Skills`, `Contact`, `Footer`.

## Config flags (`src/data.js`)

- `config.availableForWork` — toggles the hero "Open to work" eyebrow.
- `config.accent` — swap the accent color site-wide (mirrors `--acc`).
- `config.resumeUrl` — **replace the placeholder Google Drive link** with your
  real resume URL.

## Image slots to fill

Drop files in `public/` and set the paths in `src/data.js`:

- **Hero headshot** — `Hero` component, portrait ~4:5.
- **TheCrib screenshots** — `featured.image` in `src/data.js`.
- **Project thumbnails** — each `projects[].image` (16:10), for FarmerFlow,
  Stash, Tori Stecum, Brass Door Pub.

Until set, clean labeled placeholders render in their place.

## Deploy to Vercel

1. Push this repo to GitHub.
2. In Vercel: **New Project → import the repo**.
3. **Root Directory:** `frontend`
4. **Framework Preset:** Vite (auto-detected). **Node.js Version:** `24.x`.
5. Deploy. Add a custom domain if you like.

No environment variables are required — the site is fully static.
