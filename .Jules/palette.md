## 2026-02-23 - [Keyboard Accessibility & Semantic Structure]
**Learning:** In a multi-lingual Next.js 15+ application with dynamic routing, ensuring a consistent semantic structure (like a single `<main>` tag) across all locales is critical for both accessibility and consistent behavior of "Skip to Content" links.
**Action:** Always verify that the `<main>` tag is not nested when using layouts, and ensure the `id` targeted by the skip link is consistently present on the primary content container.
