# ByteSpace New

Landing page for **ByteSpace**, an online course marketplace, plus bonus **Login** and **Signup** pages.
Built from the "ByteSpace New" Figma design.

**Live site:** _add your Vercel URL here_

## Tech stack

- [Vite](https://vite.dev) + React 19 + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) (design tokens live in `src/index.css`)
- React Router (landing, login, signup; auth pages are code-split)
- [lucide-react](https://lucide.dev) icons, fonts self-hosted via `@fontsource` (Poppins for headings, Urbanist for body)

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build to dist/
npm run preview  # serve the production build locally
```

## Project structure

```
src/
  components/
    ui/       Button, Chip, Logo, SearchBar, TextField, SectionHeading, AvatarStack,
              Sprite (decorative image), ScaledStage (fit-to-width artboard)
    cards/    CourseCard, CategoryTile, TestimonialCard, FloatingCards (stat cards)
    art/      HeroArt, GrowthArt, CreatorArt (illustrated compositions)
    layout/   Navbar, Footer, AuthLayout
  sections/   Hero, Partners, CourseExplorer, LearningPaths, GrowthSection,
              CreatorSection, CreatorCta, Testimonials
  pages/      Landing, Login, Signup
  data/       courses.ts, content.ts (all copy and list data, no hard-coded arrays in JSX)
  lib/        cn (class joiner), img (asset path helper)
public/images/  photos, cut-outs and 3D shapes
```

## How the layout works

- **Design tokens** (colors, fonts) are defined once in `@theme` in `src/index.css`.
- **Illustrations** (person + floating cards + 3D shapes) are composed on a fixed artboard in
  design pixels and scaled to the container by `ScaledStage`, so they stay aligned with the design at any width.
- The hero copy is sized in `vw` on desktop so it stays aligned with the scaled illustration, and becomes a simple
  stacked layout on phones (with a mobile menu).
- **Interactive bits:** the hero search filters the course grid, category chips filter by topic, the newsletter form
  validates the email, and the Login/Signup forms validate on submit (front-end only; no backend).

## Notes for reviewers

- Images (people cut-outs, 3D shapes, course photos, avatars, logos) were extracted from exported design frames, so
  they are the design's own artwork at screenshot resolution. Swapping in original Figma exports only needs
  replacing files in `public/images/` (same file names).
- The Login and Signup designs were not part of the frames provided, so they use the same brand system
  (colors, type, pill inputs, hero artwork) rather than a specific mock.
- The newsletter button reads "Search" exactly as in the design frames.
