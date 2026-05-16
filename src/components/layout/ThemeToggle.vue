<script setup>
import { Moon, Sun } from '@lucide/vue'
import { Button } from '@/components/ui/button'
import { useThemeStore } from '@/stores/theme'

const themeStore = useThemeStore()
</script>

<template>
  <Button variant="ghost" size="icon-sm" @click="themeStore.toggle" :aria-label="themeStore.isDark ? '라이트 모드' : '다크 모드'">
    <Sun v-if="themeStore.isDark" class="size-4" />
    <Moon v-else class="size-4" />
  </Button>
</template>
