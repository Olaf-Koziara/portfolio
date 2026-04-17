## 2025-05-15 - [Accessible Navigation and Focus Management]
**Learning:** Implementing 'Skip to Content' links in Tailwind 4 with localized text requires careful focus management. Using a fixed off-screen pattern (`-top-20 focus:top-4`) is effective, but it must target a semantic `<main>` tag with `tabIndex={-1}` and `outline-none` to ensure programmatic focus works correctly without unwanted visual rings on the entire content area.
**Action:** Always verify that the skip link target has `id="main-content"`, `tabIndex={-1}`, and `outline-none`, and that the link itself is the first focusable element in the layout.

## 2025-05-15 - [Component Accessibility Patterns]
**Learning:** Interactive elements like language switchers and theme toggles often lack sufficient context for screen readers. Using `role="group"` with an `aria-label` for the container, and `aria-pressed` with localized labels for buttons, provides a much clearer user experience.
**Action:** Audit all icon-only or multi-state toggle components for these attributes.
