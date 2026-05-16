<script setup>
import { cn } from '@/lib/utils'
const props = defineProps({ class: [String, Object, Array] })
</script>

<template>
  <thead :class="cn('[&_tr]:border-b', props.class)">
    <slot />
  </thead>
</template>
