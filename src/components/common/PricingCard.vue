<script setup>
import { Check } from '@lucide/vue'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

defineProps({ plan: Object })
</script>

<template>
  <Card :class="plan.highlighted ? 'border-primary shadow-lg ring-1 ring-primary' : ''">
    <CardHeader>
      <div class="flex items-center justify-between">
        <CardTitle>{{ plan.name }}</CardTitle>
        <Badge v-if="plan.highlighted" class="text-xs">인기</Badge>
      </div>
      <div class="mt-2">
        <span class="text-3xl font-bold">{{ plan.price }}</span>
      </div>
      <CardDescription>{{ plan.description }}</CardDescription>
    </CardHeader>
    <CardContent class="space-y-4">
      <ul class="space-y-2">
        <li v-for="feature in plan.features" :key="feature" class="flex items-center gap-2 text-sm">
          <Check class="size-4 shrink-0 text-green-500" />
          {{ feature }}
        </li>
      </ul>
      <Button
        :variant="plan.highlighted ? 'default' : 'outline'"
        class="w-full"
      >
        {{ plan.cta }}
      </Button>
    </CardContent>
  </Card>
</template>
