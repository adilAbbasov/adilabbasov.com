# adilabbasov.com

Personal portfolio of **Adil Abbasov**, Backend .NET Developer.

**Live site:** [adilabbasov.com](https://adilabbasov.com)

A single-page site covering experience, skills, education, diplomas (viewable on the page), languages and contact details, with a downloadable resume.

## Tech stack

- [Next.js 14](https://nextjs.org) (App Router, static export)
- TypeScript
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://motion.dev) for animations
- [Lucide](https://lucide.dev) icons
- Hosted on [Netlify](https://www.netlify.com)

## Getting started

Requires Node.js 20 (the version Netlify builds with).

```bash
npm install
npm run dev      # development server at http://localhost:3000
npm run build    # static site written to out/
npm run lint     # ESLint
```

To preview the production build, serve the `out/` folder with any static file server.

## Project structure

```
src/
  app/                  layout, page, metadata, icons, link preview image, 404 page
  components/
    sections/           one component per page section
    layout/             navbar and footer
    ui/                 shared pieces (cards, document viewer, …)
  data/portfolio.js     all site content
  hooks/                active-section tracking for the navbar
public/                 logo, resume, diplomas, robots.txt, sitemap.xml
```

## Updating content

- **Text** (experience, skills, education, languages, contact details) lives in `src/data/portfolio.js`.
- **Resume:** replace `public/resume/Adil-Abbasov-Backend-NET-Developer.pdf`, keeping the same file name, or update `personal.resume` in the data file.
- **Diplomas:** files are in `public/diplomas/`.

## Deployment

Netlify runs `npm run build` and publishes the `out/` folder, as configured in `netlify.toml`. Every push to the connected branch triggers a new deploy.

---

© Adil Abbasov. All rights reserved.
