## 2025-05-15 - [Skip to Content Implementation]
**Learning:** When implementing 'Skip to Content' targets, using `tabIndex={-1}` is necessary for programmatic focus, but can cause a persistent focus ring around the entire main container in some browsers/frameworks.
**Action:** Always add `outline-hidden` (or `outline-none`) to the target element (e.g., `<main id="main-content" tabIndex={-1} className="outline-hidden">`) to ensure a clean UX after skipping.
