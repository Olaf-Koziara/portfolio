## 2025-05-15 - [Skip to Content Pattern]
**Learning:** Implementing a "Skip to Content" link requires coordinated changes between the global layout and every top-level page entry point. Specifically, the target element needs both a matching ID and `tabIndex={-1}` to ensure programmatic focus works correctly in all browsers, especially when navigating via keyboard.
**Action:** Always ensure the `#main-content` target exists on all page templates (including dynamic routes like Case Studies) when adding a skip link.

## 2025-05-15 - [Icon Library Versioning]
**Learning:** Some icon libraries (like `react-icons/si`) might remove or rename icons between versions (e.g., `SiAmazon` missing in 5.6.0).
**Action:** When an icon is missing from the expected category, check alternative categories (like `react-icons/fa` for AWS) before assuming it's unavailable or trying to add a new dependency.
