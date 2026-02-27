## 2025-02-14 - Skip Link Target Consistency
**Learning:** A global "Skip to Content" link in a layout file must have a corresponding target `id` (e.g., `#main-content`) on every page to avoid broken accessibility links. Using semantic `<main>` tags for the primary content area on each page is the best practice.
**Action:** When adding a global skip link, always verify that the target `id` exists on all routes, including dynamic and nested routes.

## 2025-02-14 - Locale-Aware ARIA and Accessibility Strings
**Learning:** Hardcoding accessibility strings like "Skip to content" in the layout prevents correct localization. The project's existing i18n system should be used, typically by adding a `common` namespace for site-wide UI strings.
**Action:** Place general UI localization strings under a `common` namespace in `messages/*.json` and use `getTranslations` (server) or `useTranslations` (client) to access them.
