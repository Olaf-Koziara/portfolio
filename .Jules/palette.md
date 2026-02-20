## 2026-02-20 - Next.js Image Component Constraints
**Learning:** The repository uses Next.js 16 where the `Image` company strictly requires `alt` text and either `width`/`height` or the `fill` prop. Missing these attributes causes TypeScript and build failures, which are caught during the `pnpm build` process but might be overlooked during development if only using `pnpm dev`.
**Action:** Always verify `Image` components for required accessibility and layout props (`alt`, `width`, `height` or `fill`) and run `pnpm build` to catch these errors early in the process.
