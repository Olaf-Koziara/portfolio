## 2025-05-15 - [Internationalized ARIA Labels]
**Learning:** In a multi-lingual Next.js app using `next-intl`, ARIA labels for global components (like language switchers or theme toggles) should be centralized in a `common` namespace within message files to ensure consistent accessibility across all locales.
**Action:** Always check `messages/*.json` for a `common` or `ui` namespace before adding hardcoded ARIA labels, and create one if it's missing to support accessible, localized UI elements.
