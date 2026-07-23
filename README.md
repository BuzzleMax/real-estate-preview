# BuzzleMax Luxury Real Estate Landing Page

Premium luxury real estate landing page built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Stack

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run start
```

## GitHub Pages deployment

```bash
npm run deploy
```

This project is configured for static export with Next.js, so the generated site will be written to the `out` folder.

To publish with GitHub Pages:

1. Push this project to a GitHub repository.
2. Make sure the default branch is `main`.
3. In the repository settings, open `Pages`.
4. Set the source to `GitHub Actions`.
5. Push to `main` and the workflow in `.github/workflows/deploy-github-pages.yml` will deploy automatically.

## Notes

- The floating vertical `Made by BuzzleMax` badge is persistent across the site.
- Property imagery currently uses remote Unsplash sources for layout development.
- Google Map and contact flow are presentation-ready and can be connected to live services in the next pass.
