---
name: pattern-hardcoded-colors
description: statusColor / typeColor maps use raw Tailwind palette colors (green-100, blue-600) instead of CSS theme tokens — dark mode fragility
metadata:
  type: project
---

Files affected:
- `UsersView.vue`: `statusColor` object uses `bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400` etc.
- `NotificationsView.vue`: `typeColor` uses `bg-blue-100 text-blue-600`, `bg-green-100 text-green-600` etc.
- `ExamplesView.vue` Notify buttons: `class="bg-green-600 hover:bg-green-700"` inline on Button.
- `StatCard.vue`: `text-green-500`, `text-red-500`, `text-green-600`, `text-red-600` hardcoded.
- `PricingCard.vue`: `text-green-500` for check icons.
- `HeroSection.vue`: `bg-green-500` for status dots.

These require explicit `dark:` variants to work in dark mode, leading to verbose class strings. The project theme has no semantic token for "success" or "warning" colors.

**How to apply:** Recommend defining `--color-success`, `--color-warning` etc. in main.css @theme block and using those tokens instead of raw palette colors.
