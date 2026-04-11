## 2026-04-11 - "Skip to Content" Accessibility Link
**Learning:** Implementing a "Skip to Content" link is a fundamental but often overlooked accessibility feature. Using the 'off-screen until focus' pattern with Tailwind 4 (`fixed -top-20 focus:top-4`) provides a clean implementation that doesn't affect the visual layout until needed. It's critical to ensure the target element (`<main id="main-content">`) has `tabIndex={-1}` and `outline-none` to receive programmatic focus correctly without a persistent focus ring.
**Action:** Always include a "Skip to Content" link in the root layout of multi-section applications and ensure target main tags are correctly configured for focus.

## 2026-04-11 - Language Switcher Accessibility
**Learning:** Custom interactive elements like language switchers often lack proper ARIA attributes. Using `role="group"`, `aria-label`, and `aria-pressed` for the active state significantly improves the experience for screen reader users. Additionally, explicit `cursor-pointer` classes are necessary for consistent visual affordance across different locales and browsers.
**Action:** Audit custom toggles and groups for appropriate ARIA roles and state attributes.
