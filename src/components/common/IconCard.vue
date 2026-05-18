<script setup>
import { Zap } from '@lucide/vue'
import { Card, CardContent } from '@/components/ui/card'
import { iconMap } from '@/lib/icons'

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
