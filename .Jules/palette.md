## 2025-05-14 - Skip to Content and Main Target
**Learning:** The 'Skip to Content' accessibility link requires a matching `#main-content` target. For optimal UX and to satisfy semantic requirements, this target should be a `<main>` tag with `tabIndex={-1}` and `outline-none` to ensure programmatic focus works without an intrusive ring around the entire content area.
**Action:** Always ensure the root element of every page is a `<main>` tag with appropriate accessibility attributes when implementing skip links.

## 2025-05-14 - Tailwind 4 Focus Visible and Interactive Affordance
**Learning:** Interactive elements like custom buttons (using `motion.button` or `div`) should always include `cursor-pointer` and a consistent `focus-visible` style (e.g., `focus-visible:ring-2 focus-visible:ring-accent`) to ensure both visual and keyboard accessibility in Tailwind 4.
**Action:** Verify all custom interactive components have clear focus indicators and the correct cursor.
