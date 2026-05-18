---
name: pattern-iconmap-duplication
description: iconMap object is duplicated between SidebarNav.vue and IconCard.vue — recurring DRY violation
metadata:
  type: project
---

`SidebarNav.vue` defines an `iconMap` for sidebar navigation icons. `IconCard.vue` defines a separate `iconMap` with overlapping icon entries (BarChart3, Users, Settings, Bell, FileText, HelpCircle appear in both). The constants.js `SIDEBAR_LINKS` uses kebab-case icon strings ('layout-dashboard', 'bar-chart-3') while `FEATURES` uses the same kebab-case keys.

**Why:** No shared icon registry exists in lib/constants.js or a dedicated icons module.

**How to apply:** Recommend extracting a shared `ICON_MAP` to `src/lib/icons.js` or `src/lib/constants.js` and importing it in both components.
