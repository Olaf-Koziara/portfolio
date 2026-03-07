## 2025-05-15 - Accessibility Utilities in Tailwind v4
**Learning:** In this project's Tailwind v4 configuration, standard accessibility utilities like `sr-only` and `not-sr-only` were not providing the expected 'visible on focus' behavior out of the box for the 'Skip to content' link.
**Action:** Manually define `sr-only` and `not-sr-only` in `src/app/globals.css` to ensure consistent accessibility across the application.

## 2025-05-15 - react-icons Dependency Constraints
**Learning:** The `react-icons` version used in this project is missing certain icons in the `si` (Simple Icons) category (e.g., `SiAmazon`), which are available in other categories like `fa` (Font Awesome).
**Action:** When a tech stack icon is missing from `si`, check `fa` (e.g., `FaAws`) before assuming it's unavailable.
