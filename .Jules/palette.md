## 2025-05-14 - Skip-to-content and Image component constraints
**Learning:** In Next.js 15+, the `Image` component strictly requires an `alt` prop and either fixed dimensions or `fill` (with a relative parent). Missing these causes production build failures. Additionally, a "Skip to content" link requires a matching `id="main-content"` on a semantic `<main>` tag to be effective.
**Action:** Always verify production builds with `pnpm build` after adding images or accessibility navigation features to ensure compliance with framework constraints.
