## 2025-05-15 - TypeScript Type Safety for Locales
**Learning:** Using `as any` in locale checks triggers ESLint errors in this repository. The correct type cast is `(typeof routing.locales)[number]`.
**Action:** Always use the specific locale type cast instead of `any` when checking if a locale is included in `routing.locales`.
