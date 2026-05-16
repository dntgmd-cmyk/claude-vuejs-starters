<script setup>
import { Card, CardContent } from '@/components/ui/card'
import {
  Zap, Palette, Moon, Shield, Smartphone, GitBranch,
  BarChart3, Users, Settings, Bell, FileText, HelpCircle,
} from '@lucide/vue'

const iconMap = {
  zap: Zap, palette: Palette, moon: Moon, shield: Shield,
  smartphone: Smartphone, 'git-branch': GitBranch, 'bar-chart-3': BarChart3,
  users: Users, settings: Settings, bell: Bell, 'file-text': FileText,
  'help-circle': HelpCircle,
}

defineProps({
  icon: String,
  title: String,
  description: String,
})
</script>

<template>
  <Card class="transition-shadow hover:shadow-md">
    <CardContent class="p-6">
      <div class="mb-4 flex size-10 items-center justify-center rounded-lg bg-primary/10">
        <component :is="iconMap[icon] || Zap" class="size-5 text-primary" />
      </div>
      <h3 class="mb-2 font-semibold">{{ title }}</h3>
      <p class="text-sm text-muted-foreground">{{ description }}</p>
    </CardContent>
  </Card>
</template>
