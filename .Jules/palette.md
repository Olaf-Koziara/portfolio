## 2025-05-15 - [Skip to Content Accessibility Pattern]
**Learning:** Implementing a 'Skip to Content' link is essential for keyboard navigation and screen reader accessibility, especially in sites with fixed top navigation. Using the 'off-screen until focus' pattern with Tailwind (`fixed -top-20 focus:top-4`) provides a clean visual experience while maintaining accessibility.
**Action:** Always include a 'Skip to Content' link as the first focusable element in the `<body>` and ensure it targets a `<main>` element with `id="main-content"`, `tabIndex={-1}`, and `outline-none`.

## 2025-05-15 - [Next.js Image Component Constraints]
**Learning:** In Next.js (especially Turbopack), the `Image` component strictly requires `width` and `height` properties OR the `fill` property (within a relative container). Missing these causes build-time or run-time errors. Adding `priority` to above-the-fold images like Hero graphics significantly improves LCP.
**Action:** Ensure all `Image` components have either explicit dimensions or use `fill` with a relative parent and `object-fit`. Use `priority` for Hero images.
