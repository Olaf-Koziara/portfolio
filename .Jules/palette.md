## 2025-05-15 - Global Accessibility and Navigation Patterns
**Learning:** The 'Skip to Content' accessibility link in the locale layout (`src/app/[locale]/layout.tsx`) requires the target element (e.g., in `src/app/[locale]/page.tsx` or `caseStudy/[projectName]/page.tsx`) to be a `<main>` tag with `id="main-content"`, `tabIndex={-1}`, and `className="outline-none"`. This ensures correct programmatic focus behavior and semantic structure without an unwanted focus ring appearing around the entire content area after the skip link is clicked.
**Action:** When implementing skip-to-content links, always ensure the target exists and has `tabIndex={-1}` and `outline-none`.

**Learning:** When using the 'off-screen until focus' pattern for skip links in Tailwind 4, using `fixed -top-20 focus:top-4` is more reliable for consistent visual styling on focus than toggling the `sr-only` class, which can lead to layout issues in some browsers.
**Action:** Use absolute/fixed positioning with a negative top value to hide skip links instead of `sr-only`.
