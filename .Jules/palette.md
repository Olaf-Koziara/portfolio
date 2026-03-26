## 2025-05-15 - Accessibility-first Navigation
**Learning:** The 'Skip to content' link is a fundamental accessibility requirement for keyboard users. In Tailwind 4, using the 'off-screen until focus' pattern (`fixed -top-20 focus:top-4`) provides a reliable and visually consistent experience across different browsers and locales.
**Action:** Always include a 'Skip to content' link in the main layout and ensure every page has a matching `<main id="main-content" tabIndex={-1}>` target with `outline-hidden` to handle focus correctly without visual artifacts.
