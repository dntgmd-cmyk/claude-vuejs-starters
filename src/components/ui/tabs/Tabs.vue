<script setup>
import { TabsRoot } from 'radix-vue'

defineProps({ defaultValue: String, modelValue: String })
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <TabsRoot v-bind="$attrs" @update:model-value="emit('update:modelValue', $event)">
    <slot />
  </TabsRoot>
</template>
