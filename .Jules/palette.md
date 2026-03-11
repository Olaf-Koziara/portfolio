## 2025-05-15 - Improving Portfolio Accessibility & Reliability

**Learning:** Large-scale corporate portfolio sites often miss basic keyboard accessibility features like "Skip to content" links, making navigation tedious for power users. Additionally, relying on specific icon library subsets (like `si` in `react-icons`) can be brittle across versions; `fa` is often a safer fallback for major brand icons like AWS.

**Action:** Always include a "Skip to content" link in the root layout targeting a `main-content` ID. When using `next/image` in responsive layouts, ensure the parent has `relative` positioning and use the `fill` prop with `object-fit` to prevent layout shifts and build failures.
