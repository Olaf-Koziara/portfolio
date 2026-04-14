## 2025-05-15 - [Skip to Content Implementation]
**Learning:** When implementing 'Skip to Content' links in Tailwind 4, the 'off-screen until focus' pattern (e.g., `fixed -top-20 focus:top-4`) is more reliable for consistent visual styling on focus than toggling the `sr-only` class. Additionally, adding `outline-none` to the target `<main>` element prevents a persistent focus ring while allowing programmatic focus.
**Action:** Use fixed positioning for skip links and ensure the target has `tabIndex={-1}` and `outline-none`.

## 2025-05-15 - [Strict Locale Typing]
**Learning:** In `next-intl` projects using dynamic routing, casting the `locale` variable to `(typeof routing.locales)[number]` is necessary when validating against `routing.locales.includes()` to satisfy strict TypeScript requirements and avoid build-blocking lint errors.
**Action:** Always use explicit type casting for locale validation in layouts and configuration files.
