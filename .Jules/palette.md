## 2025-05-14 - Skip to Content and Navigation Accessibility
**Learning:** In Next.js with Tailwind 4, the 'off-screen until focus' pattern (e.g., `fixed -top-20 focus:top-4`) is more reliable for 'Skip to Content' links than toggling `sr-only`, which can cause layout shifts. Also, landing focus on a `<main>` tag with `outline-none` prevent unwanted focus rings while maintaining accessibility.
**Action:** Use the off-screen pattern for skip links and ensure the target is a semantic `<main>` element with `tabIndex={-1}` and `outline-none`.
