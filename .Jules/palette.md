## 2025-05-15 - Global Accessibility and Navigation
**Learning:** The 'Skip to Content' accessibility link requires a coordinated update across layout and page files. The target element (`<main>` with `id="main-content"`) must have `tabIndex={-1}` to allow programmatic focus in some browsers without visual focus rings.
**Action:** When adding skip links, always ensure the target is a semantic `<main>` tag and verify focus behavior with Playwright using `expect(locator).to_be_focused()`.
