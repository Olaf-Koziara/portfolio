## 2025-05-14 - Accessibility and Navigation Polish

**Learning:** When implementing 'Skip to content' links in Tailwind 4, the 'off-screen until focus' pattern (e.g., `fixed -top-20 focus:top-4`) is more reliable for consistent visual styling on focus than toggling the `sr-only` class, which can lead to layout overlapping or missing backgrounds in some browsers/locales.

**Action:** Always use the 'off-screen until focus' pattern for skip links.

**Learning:** To ensure correct programmatic focus behavior and semantic structure without an unwanted focus ring after using a skip link, the root element of each page must be a `<main>` tag with `id="main-content"`, `tabIndex={-1}`, and the `outline-none` class.

**Action:** Consistently apply `id="main-content" tabIndex={-1} className="outline-none"` to page-level `<main>` elements.
