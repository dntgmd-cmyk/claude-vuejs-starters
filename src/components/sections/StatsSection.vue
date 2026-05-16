<script setup>
import { STATS } from '@/lib/constants'
</script>

<template>
  <section class="border-y bg-muted/40 py-16">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div v-for="stat in STATS" :key="stat.label" class="text-center">
          <p class="text-4xl font-bold text-primary">{{ stat.value }}</p>
          <p class="mt-1 font-semibold">{{ stat.label }}</p>
          <p v-if="stat.description" class="mt-0.5 text-sm text-muted-foreground">{{ stat.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
