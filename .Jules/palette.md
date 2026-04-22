## 2025-05-15 - 'Skip to Content' pattern in Tailwind 4
**Learning:** In Tailwind 4, using the 'off-screen until focus' pattern (e.g., `fixed -top-20 focus:top-4`) is more reliable for 'Skip to Content' links than toggling `sr-only`, which can sometimes cause layout issues or inconsistent visual appearance on focus across different browsers.
**Action:** Use absolute/fixed positioning with a negative offset and bring it into view on `focus` or `focus-visible` for all skip links in this design system.

## 2025-05-15 - Missing `SiAmazon` in `react-icons/si`
**Learning:** The project's version of `react-icons` (5.6.0) does not export `SiAmazon` from the `si` category, leading to build-blocking errors. The `FaAws` icon from the `fa` category is the correct alternative.
**Action:** Always check for export existence when adding brand icons from `react-icons` and prefer `FaAws` for AWS in this repository.
