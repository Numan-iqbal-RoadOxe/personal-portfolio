# Portfolio — React + Vite

An animated, dark-themed developer portfolio built with React, Vite, and Framer Motion. Includes a custom cursor, an orchestrated hero load-in, scroll-reveal sections, an infinite skills marquee, and a project list with a cursor-following preview panel.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint

## Customize

- **Your info & copy**: `src/components/Hero.jsx`, `About.jsx`, `Contact.jsx`
- **Projects**: `src/data/projects.js` — add your real projects, links, and stack
- **Colors, type, spacing**: all design tokens live at the top of `src/styles.css` (`:root`)
- **Cursor behavior**: `src/components/CustomCursor.jsx`

## Stack

- React 18 + Vite 5
- Framer Motion (animation)
- react-icons (icon set)
- Plain CSS with custom properties (no framework lock-in)

## Notes

- The custom cursor and cursor-following project preview automatically disable on touch devices.
- Motion respects `prefers-reduced-motion`.
# personal-portfolio
