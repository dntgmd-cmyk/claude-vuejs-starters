<script setup>
import { ProgressRoot, ProgressIndicator } from 'radix-vue'
import { cn } from '@/lib/utils'

const props = defineProps({
  class: [String, Object, Array],
  modelValue: Number,
})
</script>

<template>
  <ProgressRoot
    :model-value="modelValue"
    :class="cn('relative h-2 w-full overflow-hidden rounded-full bg-primary/20', props.class)"
  >
    <ProgressIndicator
      class="h-full w-full flex-1 bg-primary transition-all"
      :style="{ transform: `translateX(-${100 - (modelValue ?? 0)}%)` }"
    />
  </ProgressRoot>
</template>
