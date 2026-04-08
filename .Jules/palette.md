## 2025-05-15 - [Skip to Content Link Implementation]
**Learning:** In Next.js with `next-intl`, the 'Skip to content' link should be placed at the very top of the layout (e.g., in `src/app/[locale]/layout.tsx`) and target a `#main-content` ID. To provide a smooth focus transition, the target element should include `tabIndex={-1}` and `outline-none` to prevent a visible ring after the skip link is used.
**Action:** Always include `tabIndex={-1}` and `outline-none` on the `#main-content` target to ensure a pleasant and accessible navigation experience.
