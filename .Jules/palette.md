## 2025-05-15 - Accessible "Skip to Content" Implementation
**Learning:** For 'Skip to content' targets, using the `outline-none` utility on the target element (e.g., `<main id="main-content">`) is essential to prevent a persistent focus ring from appearing around the entire content area after the skip link is clicked, while still allowing the link itself to be visible when focused.
**Action:** Always pair 'Skip to content' links with a target that has `id="main-content"`, `tabIndex={-1}`, and `className="outline-none"`.
