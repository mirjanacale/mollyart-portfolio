# MollyArt portfolio

Art portfolio for MollyArt — mixed-media paintings by Mirjana Cale.
React + TypeScript + Vite, static build, no backend.

## Develop

```
npm install
npm run dev       # local dev server
npm run build     # type-check + production build (dist/)
npm run preview   # serve the production build locally
```

Deploy: static `dist/` output — on Vercel just import the repo, framework preset "Vite".

## Adding a painting

1. Drop two images into `public/paintings/`: a grid version (~800px wide, `.webp`)
   and a full version for the lightbox (`-full.jpg`).
2. Add one entry to `src/data/paintings.ts` (title, year, medium, aspect ratio,
   optional Mollavie URL). That's it — no other code changes.

## Content still needed from Mirjana

- [ ] Bio: add a sentence about your homeland in `src/components/About.tsx`
      (current text is your own intro from Mollavie).
- [ ] Artist photo: put it in `public/about/` and set `ARTIST_PHOTO` in
      `src/components/About.tsx`.
- [ ] MollyFinishArt, MollyColor, and developer-portfolio links + screenshots +
      one-liners in `src/data/projects.ts` (cards render unlinked until then).
- [ ] Better painting photos (straight-on, daylight) to replace the shop images —
      especially "The Truth" and "One", which are low-resolution on Mollavie.
