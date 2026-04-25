## 2025-05-15 - Skip to Content and Main Focus Pattern
**Learning:** The 'Skip to Content' accessibility link in the locale layout (`src/app/[locale]/layout.tsx`) targets `#main-content`. Consequently, the root element of each page (e.g., in `src/app/[locale]/page.tsx` or `caseStudy/[projectName]/page.tsx`) must be a `<main>` tag with `id="main-content"`, `tabIndex={-1}`, and `className="outline-none"` to ensure correct programmatic focus behavior and semantic structure without an unwanted focus ring.

**Action:** Always ensure the landing page or deep-link targets have the correct `main-content` ID and tabIndex configuration when implementing skip links.
