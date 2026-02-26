## 2025-05-15 - [Skip to Content Link & Semantic Main]
**Learning:** Adding a "Skip to Content" link is a fundamental accessibility win, but it requires careful coordination with the semantic `<main>` tag. If the layout uses `<main>`, individual pages must not, to avoid nested `<main>` tags which are semantically invalid and can confuse screen readers.
**Action:** When adding a skip link in the root/locale layout, ensure the target container uses the `<main>` tag and refactor any page-level components to use `<div>` or `<section>` instead.

## 2025-05-15 - [Next.js Image Fill Requirement]
**Learning:** Using the `fill` prop on Next.js `Image` components requires the parent container to be positioned (e.g., `relative`, `absolute`, or `fixed`). Failure to do so causes the image to expand to the nearest positioned ancestor, often breaking the intended layout.
**Action:** Always verify that the direct parent of an `Image` with `fill` has the `relative` class (or equivalent).
