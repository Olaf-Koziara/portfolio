## 2025-05-22 - Global Accessibility Improvements & Skip Link
**Learning:** Implementing 'Skip to Content' links with 'off-screen until focus' (e.g., `fixed -top-20 focus:top-4`) provides a better UX than just toggling `sr-only`, as it gives clear visual confirmation to keyboard users. Using a dedicated 'common' translation namespace for these global UI strings keeps the codebase organized and localized.
**Action:** Use the `main-content` ID and `tabIndex={-1}` on the main container to ensure focus lands correctly after clicking a skip link.

**Learning:** Dependency versioning can lead to missing icons in `react-icons` (e.g., `SiAmazon` missing in `si` category but available as `FaAws` in `fa`).
**Action:** Always verify library exports when a build fails after dependency updates, and prioritize widely available alternatives.
