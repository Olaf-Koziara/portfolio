## 2025-05-22 - [Build-blocking Accessibility Checks]
**Learning:** Next.js build in this repository is configured to fail on missing `alt` props for the `Image` component. This ensures that accessibility is not just a recommendation but a requirement for a successful deployment.
**Action:** Always verify that all `Image` components have appropriate `alt` text and required dimensions (`width`/`height` or `fill`) before attempting a build.
