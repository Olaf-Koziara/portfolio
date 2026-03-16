## 2025-05-15 - [Accessibility Landmarks & Keyboard Navigation]
**Learning:** For a robust "Skip to Content" implementation in this Next.js/next-intl stack, the `sr-only` link must target a `<main>` tag with `id="main-content"` and `tabIndex={-1}`. This ensures that screen readers and keyboard users land correctly on the primary content across both static and dynamic routes.
**Action:** Always wrap the core content of new pages in a `<main id="main-content" tabIndex={-1}>` tag and verify the focus transition using a keyboard-simulation script.
