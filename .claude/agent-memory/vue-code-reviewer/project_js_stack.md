---
name: project-js-stack
description: This project uses plain JavaScript (.js files), not TypeScript, despite CLAUDE.md referencing TypeScript
metadata:
  type: project
---

All source files under src/ use .js extension (main.js, router/index.js, stores/theme.js, lib/constants.js, lib/utils.js). Component files are .vue but contain no TypeScript annotations. The vite.config and tsconfig files exist (TypeScript tooling is installed) but the application code itself is JavaScript.

**Why:** The starter kit explicitly targets JavaScript developers who want to skip TypeScript setup overhead. FEATURES constant in constants.js even advertises "순수 JavaScript 환경".

**How to apply:** Do not flag missing TypeScript types as critical issues in this project. The absence of types is intentional. However, JSDoc comments on functions are still expected per the coding style guide in CLAUDE.md.
