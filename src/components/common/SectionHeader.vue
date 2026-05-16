<script setup>
defineProps({
  eyebrow: String,
  title: String,
  description: String,
  centered: Boolean,
})
</script>

<template>
  <div :class="['space-y-4', centered && 'text-center mx-auto max-w-2xl']">
    <p v-if="eyebrow" class="text-sm font-semibold uppercase tracking-widest text-primary">
      {{ eyebrow }}
    </p>
    <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">{{ title }}</h2>
    <p v-if="description" class="text-lg text-muted-foreground">{{ description }}</p>
  </div>
</template>
