# Palette's Journal - Critical Learnings Only

## 2025-05-14 - Navigation Accessibility and Skip Link Pattern
**Learning:** Standard navigation components (LanguageSwitcher, ThemeToggle) lacked sufficient ARIA context for screen readers. Additionally, the lack of a "Skip to Content" link hindered keyboard navigation.
**Action:** Always implement a "Skip to Content" link in the root layout targeting `<main id="main-content">` and ensure all navigation groups have `role="group"` and descriptive `aria-label`s.

## 2025-05-14 - Next.js Image Component Best Practices
**Learning:** Found instances of `Image` components without `alt` props and dimensions, which caused build failures and accessibility issues.
**Action:** Use `fill` prop with `relative` parent and always provide localized `alt` text for project-related images.
