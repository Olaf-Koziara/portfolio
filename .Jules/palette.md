## 2025-05-14 - Skip to Content and Main Semantic Target
**Learning:** The 'Skip to Content' accessibility link in the locale layout (`src/app/[locale]/layout.tsx`) targets `#main-content`; consequently, the root element of each page (e.g., in `src/app/[locale]/page.tsx` or `caseStudy/[projectName]/page.tsx`) should be a `<main>` tag with `id="main-content"` to provide a valid target and ensure semantic structure.
**Action:** Always ensure a `<main id="main-content">` element exists when implementing or maintaining the skip link.

## 2025-05-14 - Responsive Next.js Image Props
**Learning:** In Next.js 16.1.1, the `Image` component strictly requires `alt` and either `width`/`height` or `fill`. Using `fill` requires a relative container and `object-cover` for responsive hero sections.
**Action:** When adding images, wrap them in a relative container with a defined aspect ratio for better mobile responsiveness.
