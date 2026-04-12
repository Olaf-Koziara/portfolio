## 2025-05-15 - "Skip to Content" Implementation Patterns
**Learning:** When implementing 'Skip to Content' links in Tailwind 4, the 'off-screen until focus' pattern (e.g., `fixed -top-20 focus:top-4`) is more reliable for consistent visual styling on focus than toggling the `sr-only` class, which can lead to layout overlapping or missing backgrounds in some browsers/locales. Additionally, using `outline-none` on the target element (`<main id="main-content">`) prevents a persistent focus ring from appearing around the entire content area after the skip link is clicked.
**Action:** Use the absolute/fixed positioning technique for skip links and ensure the target has `tabIndex={-1}` and `outline-none`.

## 2025-05-15 - TypeScript Locale Validation
**Learning:** In Next.js with `next-intl`, `params` properties like `locale` are often treated as strings. To pass strict TypeScript checks in `routing.locales.includes()`, the variable must be cast to `(typeof routing.locales)[number]`.
**Action:** Always use `locale as (typeof routing.locales)[number]` when checking against the routing configuration to avoid build-blocking lint errors.
