<script setup>
import { Separator as SeparatorPrimitive } from 'radix-vue'
import { cn } from '@/lib/utils'

const props = defineProps({
  class: [String, Object, Array],
  orientation: { type: String, default: 'horizontal' },
  decorative: { type: Boolean, default: true },
})
</script>

<template>
  <SeparatorPrimitive
    :orientation="orientation"
    :decorative="decorative"
    :class="cn(
      'shrink-0 bg-border',
      orientation === 'vertical' ? 'w-px h-full' : 'h-px w-full',
      props.class,
    )"
  />
</template>
