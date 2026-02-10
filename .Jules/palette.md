## 2025-05-15 - [Skip to Content Accessibility Pattern]
**Learning:** For internationalized Next.js apps using `next-intl`, accessibility features like 'Skip to Content' should have localized strings stored in a `common` namespace. The link should be the first focusable element in the layout and target a `<main id="main-content">` element. Use standard CSS for visibility on focus to ensure it works across all screen sizes and themes.
**Action:** Use the `common` namespace for shared UI strings and ensure the `id="main-content"` is present on the primary content container in future projects.
