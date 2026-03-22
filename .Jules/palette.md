## 2025-05-15 - [Skip to Content Accessibility]
**Learning:** When implementing 'Skip to content' links in Tailwind 4, the 'off-screen until focus' pattern (e.g., `fixed -top-20 focus:top-4`) is more reliable for consistent visual styling on focus than toggling the `sr-only` class, which can lead to layout overlapping or missing backgrounds in some browsers/locales. Additionally, using `outline-hidden` on the target `<main>` element prevents an unwanted focus ring after navigation.
**Action:** Use absolute/fixed positioning with negative offsets for skip links and ensure the target has `id="main-content"`, `tabIndex={-1}`, and `outline-hidden`.

## 2025-05-15 - [Localized ARIA Labels]
**Learning:** For multi-locale apps, all accessibility labels (ARIA) must be defined in the translation JSONs (e.g., under a `common` namespace) and retrieved via `useTranslations` or `getTranslations` to ensure screen readers use the correct language.
**Action:** Place general UI strings (Home, Skip link, Language labels) in a `common` namespace in all locale message files.
