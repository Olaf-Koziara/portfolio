## 2025-05-14 - Standardizing Accessibility and Semantic Structure

**Learning:** Accessibility features like "Skip to Content" links require a consistent semantic target across all page types (Home, Case Studies) to be effective. Relying on generic container IDs like `#main-content` is only robust if the root element of every page is a `<main>` tag with that specific ID. Additionally, the Next.js `Image` component requires localized `alt` text and either `fill` or explicit dimensions to pass production build checks, which is a critical gatekeeper for UX quality in this repository.

**Action:** Always wrap page content in a `<main id="main-content">` tag. When using the Next.js `Image` component, verify that localized `alt` text is provided and that the layout (e.g., `fill` with a relative container) is correctly configured to avoid build-time errors.
