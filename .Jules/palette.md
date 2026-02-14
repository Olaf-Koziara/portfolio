## 2025-05-15 - Responsive Images and Locale Type Safety

**Learning:** Hiding significant UI elements (like project images in CaseStudyHero) on mobile to pass lint or simplify layout is considered a design regression. Additionally, using 'any' for locale inclusion checks triggers ESLint errors in this repo.

**Action:** Use responsive Tailwind classes (e.g., flex-col lg:flex-row) to adapt layouts instead of hiding elements. For locale checks, cast to (typeof routing.locales)[number] to maintain type safety and pass linting.
