<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  title: String,
  description: String,
  breadcrumbs: Array,
})
</script>

<template>
  <div class="space-y-2">
    <nav v-if="breadcrumbs?.length" class="flex items-center gap-1.5 text-sm text-muted-foreground">
      <template v-for="(crumb, i) in breadcrumbs" :key="i">
        <span v-if="i > 0" class="text-muted-foreground/50">/</span>
        <RouterLink v-if="crumb.href" :to="crumb.href" class="hover:text-foreground transition-colors">
          {{ crumb.label }}
        </RouterLink>
        <span v-else class="text-foreground font-medium">{{ crumb.label }}</span>
      </template>
    </nav>

    <div class="flex items-center justify-between gap-4">
      <div>
        <h1 class="text-2xl font-bold tracking-tight">{{ title }}</h1>
        <p v-if="description" class="mt-1 text-sm text-muted-foreground">{{ description }}</p>
      </div>
      <div v-if="$slots.action">
        <slot name="action" />
      </div>
    </div>
  </div>
</template>
