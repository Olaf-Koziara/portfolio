## 2025-05-15 - Accessibility: Skip to Content Link and Focus Management
**Learning:** For a comprehensive "Skip to Content" implementation in a Next.js App Router project with internationalization, you need to:
1. Add a localized skip link in the root layout (using `getTranslations` in server components).
2. Ensure the main content container has a unique ID (e.g., `main-content`) and `tabIndex={-1}` to allow programmatic focus even if it's not a naturally focusable element.
3. Use Tailwind's `sr-only` and `focus:not-sr-only` for the skip link to ensure it's only visible when needed but accessible to screen readers.
**Action:** Always include `tabIndex={-1}` on the target container of a skip link to ensure consistent behavior across browsers and assistive technologies.
