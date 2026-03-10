## 2025-05-15 - Enhancing Keyboard and Screen Reader Accessibility

**Learning:** Navigation components and interactive elements (like the language switcher) must have explicit ARIA labels and states (`aria-pressed`) to be usable by screen readers. A skip-to-content link is essential for keyboard-only users in projects with a fixed header or side navigation.

**Action:** Always include a `common` translation namespace for localized accessibility labels and ensure page-level containers use the correct semantic HTML tags (like `<main>`) with unique IDs for navigation targets.
