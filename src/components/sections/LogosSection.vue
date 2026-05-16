<script setup>
import { LOGO_ITEMS } from '@/lib/constants'
</script>

<template>
  <section class="border-y py-10">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <p class="mb-6 text-center text-sm text-muted-foreground">기술 스택</p>
      <div class="flex flex-wrap items-center justify-center gap-6">
        <div
          v-for="item in LOGO_ITEMS"
          :key="item"
          class="flex h-9 items-center justify-center rounded-lg border bg-muted/50 px-5 text-sm font-semibold text-muted-foreground"
        >
          {{ item }}
        </div>
      </div>
    </div>
  </section>
</template>
