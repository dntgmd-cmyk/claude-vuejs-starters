---
name: pattern-switch-vmodel
description: Switch component is used with two different binding patterns in the same codebase — potential runtime bug
metadata:
  type: project
---

In `SettingsView.vue`, the Switch component is used two ways:
1. Notifications tab: `:checked="notifications[item.key]"` + `@update:checked="(v) => (notifications[item.key] = v)"` — manual binding
2. Appearance tab: `v-model:checked="appearance.compactMode"` — v-model binding

Both patterns work because the Switch emits `update:checked`. However the manual binding in the notifications loop is necessary because `item.key` is a dynamic property name. The inconsistency is acceptable but should be documented.

**How to apply:** When reviewing Switch usage, verify that v-model:checked is used for static bindings and the manual pattern is only used for dynamic key access.
