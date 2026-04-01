## 2025-05-15 - "Skip to Content" pattern
**Learning:** In Next.js with localized routes, the "Skip to Content" pattern must be consistently applied across the layout and all page-level entry points to ensure accessibility and keyboard focus reliability. Using Tailwind's off-screen pattern (`-top-20 focus:top-4`) is more robust than toggling `sr-only` for focus visibility.
**Action:** Always include a skip link in the root locale layout and ensure all pages target a `<main id="main-content" tabIndex={-1} className="outline-none">` element.

## 2025-05-15 - SVG Icon Compatibility
**Learning:** Some `react-icons` categories (like `si`) might be missing specific icons (like `SiAmazon`) in the project's dependency version. The `fa` category is a reliable alternative (e.g., `FaAws`).
**Action:** Check build logs for missing icon exports and verify alternative categories like `fa` or `io`.
