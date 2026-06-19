# Walk in Woods Restaurant — Landing Page Bundle

This bundle contains the landing page in three forms plus shared content/assets.

## Folders

- `html/` — Plain HTML + CSS. Open `html/index.html` directly in any browser, or upload to any static host (Netlify, GitHub Pages, S3, cPanel).
- `react/` — Vite + React 18 version. Run locally:
  ```bash
  cd react
  npm install
  npm run dev        # open http://localhost:5173
  npm run build      # production build in dist/
  ```
- `content/content.json` — All page text/images in one JSON file. Edit this to update copy in the React version. The HTML version uses inline copy (edit `html/index.html` directly).
- `assets/` — Source images (also copied into `html/assets/` and `react/public/assets/`).

## Design tokens

- Primary (burgundy): `#5a1a22`
- Accent (gold): `#c89b3c`
- Background (warm cream): `#fbf7ef`
- Heading font: Cormorant Garamond
- Body font: Inter

Update them in `html/style.css` (also used by the React version at `react/src/style.css`) under `:root`.

## Phone / address

Change the phone number, WhatsApp link, address, and map embed in:
- HTML: search `+919876543210` / `Rajpur Road` inside `html/index.html`
- React: `content/content.json` (and `react/src/content.json`)
