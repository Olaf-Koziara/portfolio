## 2025-05-14 - Skip to Content Pattern
**Learning:** In Next.js with Tailwind CSS, a "Skip to Content" link can be efficiently implemented using the `sr-only` class combined with `focus:not-sr-only`. This ensures the link remains hidden for sighted users until keyboard navigation (Tab) focuses it, at which point it becomes visible and accessible.
**Action:** Use the following pattern for skip links: `<a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] ...">`. Ensure the target element has the corresponding ID.
