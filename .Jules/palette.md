## 2025-05-15 - React Icons Version Compatibility
**Learning:** The `react-icons` version in the project might miss specific icons in certain categories (e.g., `SiAmazon` was missing from `si` in v5.6.0, despite being expected).
**Action:** Always verify icon existence during build; use `fa` category as a reliable fallback for major cloud/tech brands (e.g., `FaAws`).

## 2025-05-15 - Localization Namespace Pattern
**Learning:** Global UI elements (LanguageSwitcher, ThemeToggle, common alt texts) are best served by a `common` namespace in `messages/*.json` to avoid repetition and maintain a clean structure.
**Action:** Use the `common` namespace for all UI-related strings that aren't page-specific.
