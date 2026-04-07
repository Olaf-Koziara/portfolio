## 2025-05-15 - Improving Accessibility with "Skip to Content" and ARIA Enhancements

**Learning:** In Tailwind CSS 4, the "off-screen until focus" pattern for "Skip to content" links (e.g., `fixed -top-20 focus:top-4`) is more reliable than using `sr-only` and toggling it, as it ensures consistent visual placement and prevents layout overlapping in some browser/locale combinations. Additionally, using `outline-none` on the `#main-content` target prevents an unsightly focus ring around the entire page content after navigation.

**Action:** Always implement "Skip to content" links using the positioning pattern and ensure the target element has `tabIndex={-1}` and `outline-none` to handle programmatic focus cleanly.
