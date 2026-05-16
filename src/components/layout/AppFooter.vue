<script setup>
import { RouterLink } from 'vue-router'

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="border-t bg-muted/40">
    <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div class="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div class="flex items-center gap-2">
          <div class="flex size-6 items-center justify-center rounded bg-primary">
            <span class="text-xs font-bold text-primary-foreground">V</span>
          </div>
          <span class="text-sm font-semibold">Vue Starter</span>
        </div>

        <nav class="flex gap-6">
          <RouterLink to="/features" class="text-sm text-muted-foreground hover:text-foreground">Features</RouterLink>
          <RouterLink to="/pricing" class="text-sm text-muted-foreground hover:text-foreground">Pricing</RouterLink>
          <RouterLink to="/about" class="text-sm text-muted-foreground hover:text-foreground">About</RouterLink>
        </nav>

        <p class="text-sm text-muted-foreground">
          © {{ currentYear }} Vue Starter. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
