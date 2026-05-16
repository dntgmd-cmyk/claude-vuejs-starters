<script setup>
import { Inbox } from '@lucide/vue'

defineProps({
  title: String,
  description: String,
})
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-3 py-12 text-center">
    <div class="flex size-12 items-center justify-center rounded-full bg-muted">
      <Inbox class="size-6 text-muted-foreground" />
    </div>
    <div>
      <p class="font-medium">{{ title ?? '데이터가 없습니다' }}</p>
      <p v-if="description" class="mt-1 text-sm text-muted-foreground">{{ description }}</p>
    </div>
    <slot />
  </div>
</template>
