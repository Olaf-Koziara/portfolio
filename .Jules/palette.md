## 2025-05-15 - [Skip to Content Implementation in Tailwind 4]
**Learning:** In Tailwind 4, using the "off-screen until focus" pattern (e.g., `fixed -top-20 focus:top-4`) is more reliable for consistent visual styling on focus than toggling the `sr-only` class, which can lead to layout overlapping or missing backgrounds in some browsers/locales.
**Action:** Always prefer coordinate-based off-screen positioning for skip links to ensure they appear correctly above all other fixed elements (like navigation bars) when focused.

## 2025-05-15 - [Accessible Focus Management for Skip Links]
**Learning:** To avoid a persistent focus ring around the entire content area after a skip link is activated, the target element (e.g., `<main id="main-content">`) should have `tabIndex={-1}` and the `outline-none` class. This ensures programmatic focus works correctly for screen readers without creating an unwanted visual artifact for sighted users.
**Action:** Apply `id="main-content" tabIndex={-1} className="outline-none"` to the root container of pages when implementing skip-to-content functionality.
