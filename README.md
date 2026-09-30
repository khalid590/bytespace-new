# ByteSpace New

Landing page for **ByteSpace**, an online course marketplace, plus bonus **Login** and **Signup** pages.
Built from the "ByteSpace New" Figma design.

**Live site:**(https://bytespace-new-black.vercel.app/)

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

## Pages and routes

| Route | Page |
|---|---|
| `/` | Landing page |
| `/courses` | Search page: search, filters, category chips, pagination (`?q=` pre-fills the search) |
| `/courses/:courseId` | Course details with About / Lessons / Reviews tabs (`?tab=lessons`, `?tab=reviews`) |
| `/creators/:creatorId` | Creator profile with follow button and course grid |
| `/login`, `/register` | Auth screens (front-end validation only; `/signup` redirects to `/register`) |
| `*` | 404 page |

## Project structure

```
src/
  components/
    ui/       Button, Chip, Dropdown, Pagination, SearchBar, TextField, Stars, CheckIcon,
              ShareButton, Logo, AvatarStack, Sprite, ScaledStage, ...
    cards/    CourseCard, CourseGrid, CourseFilterBar, CategoryTile, TestimonialCard, FloatingCards
    course/   CourseTabs, AboutTab, LessonsTab, ReviewsTab, EnrollCard
    art/      HeroArt, GrowthArt, CreatorArt, AuthArt (illustrated compositions)
    layout/   Navbar, Footer, PageHero, AuthShell, ScrollManager
  sections/   Landing sections (Hero, Partners, CourseExplorer, LearningPaths, ...)
  pages/      Landing, Courses, CourseDetail, CreatorProfile, Login, Register, NotFound
  data/       courses, courseDetail, creators, content (all copy and list data)
  hooks/      useCourseFilters (filters + pagination), useDocumentTitle
  lib/        routes, courseFilters (pure filter/sort), courseTabs, validation, cn
public/images/  photos, cut-outs and 3D shapes
```

## How the layout works

- **Design tokens** (colors, fonts) are defined once in `@theme` in `src/index.css`.
- **Illustrations** (person + floating cards + 3D shapes) are composed on a fixed artboard in
  design pixels and scaled to the container by `ScaledStage`, so they stay aligned with the design at any width.
- The hero copy is sized in `vw` on desktop so it stays aligned with the scaled illustration, and becomes a simple
  stacked layout on phones (with a mobile menu).
- **Interactive bits:** the hero search hands off to the search page, where the query, Filter / Level / Category
  dropdowns, category chips, sort menu and pagination all work on sample data. Course pages have keyboard-accessible
  tabs, a working star-rating filter on reviews, share (native share sheet or copy link), enroll and follow toggles.
  The newsletter and auth forms validate on submit (front-end only; no backend).

## Notes for reviewers

- Images (people cut-outs, 3D shapes, course photos, avatars, logos) were extracted from exported design frames, so
  they are the design's own artwork at screenshot resolution. Swapping in original Figma exports only needs
  replacing files in `public/images/` (same file names).
- Course detail content, reviews and the 45-course catalogue are mock data in `src/data`. The first page of the
  catalogue mirrors the design; later pages vary level, price and category so the filters have something to do.
- Two small deliberate tweaks to the design copy: the creator bio placeholder "[Creator's Name]" is filled in and the
  "ive into" typo is fixed; the rating breakdown draws 5 to 1 stars per row instead of five in every row; the "Products"
  count reflects the number of courses shown.
- The newsletter button reads "Search" exactly as in the design frames.

@khalid590
