<script setup>
import { TrendingUp, TrendingDown } from '@lucide/vue'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

defineProps({
  label: String,
  value: String,
  trend: String,
  positive: Boolean,
})
</script>

<template>
  <Card>
    <CardHeader class="pb-2">
      <p class="text-sm font-medium text-muted-foreground">{{ label }}</p>
    </CardHeader>
    <CardContent>
      <p class="text-2xl font-bold">{{ value }}</p>
      <div v-if="trend" class="mt-1 flex items-center gap-1 text-xs">
        <TrendingUp v-if="positive" class="size-3 text-green-500" />
        <TrendingDown v-else class="size-3 text-red-500" />
        <span :class="positive ? 'text-green-600' : 'text-red-600'">{{ trend }}</span>
      </div>
    </CardContent>
  </Card>
</template>
