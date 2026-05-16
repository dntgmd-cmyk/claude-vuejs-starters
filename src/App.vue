<script setup>
import { RouterView } from 'vue-router'
import { useThemeStore } from '@/stores/theme'
import { watch } from 'vue'

const themeStore = useThemeStore()

watch(
  () => themeStore.isDark,
  (dark) => {
    document.documentElement.classList.toggle('dark', dark)
  },
  { immediate: true },
)
</script>

<template>
  <RouterView />
</template>
