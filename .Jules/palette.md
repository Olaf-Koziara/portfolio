## 2026-04-23 - "Skip to Content" Accessibility Pattern

**Learning:** When implementing "Skip to Content" links in a Tailwind 4 + Next.js environment, the "off-screen until focus" pattern (using `fixed -top-20 focus:top-4`) is more robust than toggling `sr-only` classes. It ensures the link is visually consistent and doesn't interfere with the layout when not focused. Additionally, the skip target (`<main id="main-content">`) should have `tabIndex={-1}` and `outline-none` to ensure programmatic focus works correctly across browsers without an unwanted focus ring.

**Action:** Use the `fixed -top-20 focus:top-4` pattern for skip links and ensure the target has `tabIndex={-1}` and `outline-none`.

## 2026-04-23 - React-Icons Category Availability

**Learning:** In the current project's dependency version of `react-icons`, some popular icons like AWS might be missing from their expected Simple Icons (`si`) category (e.g., `SiAmazon` was missing), but available in others like Font Awesome (`fa`).

**Action:** If an icon is missing from the `si` category, check `fa` (e.g., `FaAws`) before looking for other solutions.
