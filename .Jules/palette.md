## 2025-05-15 - 'Skip to Content' Implementation Patterns
**Learning:** When implementing 'Skip to Content' targets in Tailwind 4, the 'off-screen until focus' pattern (e.g., `fixed -top-20 focus:top-4`) is more reliable for consistent visual styling on focus than toggling the `sr-only` class. Additionally, the target element (e.g., `<main>`) should have `outline-none` and `tabIndex={-1}` to prevent a persistent focus ring while ensuring programmatic focus works.
**Action:** Use fixed positioning with negative top offset for skip links and apply `outline-none` to the target main content area.
