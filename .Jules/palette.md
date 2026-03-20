## 2025-05-15 - Improving Skip-to-Content Link Reliability

**Learning:** When implementing 'Skip to content' links in Tailwind 4, the 'off-screen until focus' pattern (e.g., `fixed -top-20 focus:top-4`) is more reliable for consistent visual styling on focus than toggling the `sr-only` class. Toggling `sr-only` on focus can sometimes result in elements that are technically "visible" but lack proper layout context (like height or background) depending on how the browser interprets the focus transition.

**Action:** Prefer positioning skip links fixed off-screen and transitioning them into view on focus, ensuring they have high `z-index`, clear background/text colors, and the `outline-hidden` utility on the target element to prevent persistent focus rings.

## 2025-05-15 - AWS Icon Missing in react-icons/si

**Learning:** The Amazon/AWS icon `SiAmazon` is missing from the `si` (Simple Icons) category in the current version of `react-icons` in this project.

**Action:** Use `FaAws` from the `fa` (Font Awesome) category instead of `SiAmazon` when the AWS icon is needed.
