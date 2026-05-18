<script setup>
import { useRoute, RouterLink } from 'vue-router'
import { Badge } from '@/components/ui/badge'
import { SIDEBAR_LINKS } from '@/lib/constants'
import { iconMap } from '@/lib/icons'
import { cn } from '@/lib/utils'

defineProps({ collapsed: Boolean })

const route = useRoute()
</script>

<template>
  <nav class="flex flex-col gap-1 px-2">
    <RouterLink
      v-for="link in SIDEBAR_LINKS"
      :key="link.href"
      :to="link.href"
      :class="cn(
        'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
        route.path === link.href
          ? 'bg-primary text-primary-foreground'
          : 'text-muted-foreground hover:bg-muted hover:text-foreground',
        collapsed && 'justify-center px-2',
      )"
    >
      <component :is="iconMap[link.icon]" class="size-4 shrink-0" />
      <template v-if="!collapsed">
        <span class="flex-1">{{ link.label }}</span>
        <Badge v-if="link.badge" variant="secondary" class="text-xs">{{ link.badge }}</Badge>
      </template>
    </RouterLink>
  </nav>
</template>
