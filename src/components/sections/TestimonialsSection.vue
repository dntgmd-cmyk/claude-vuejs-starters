<script setup>
import { TESTIMONIALS } from '@/lib/constants'
import SectionHeader from '@/components/common/SectionHeader.vue'
import { Card, CardContent } from '@/components/ui/card'
</script>

<template>
  <section class="py-20 sm:py-28">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Testimonials"
        title="개발자들의 이야기"
        centered
      />
      <div class="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card v-for="t in TESTIMONIALS" :key="t.name">
          <CardContent class="p-6">
            <p class="text-sm leading-relaxed text-muted-foreground">"{{ t.content }}"</p>
            <div class="mt-4 flex items-center gap-3">
              <div class="flex size-9 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                {{ t.name[0] }}
              </div>
              <div>
                <p class="text-sm font-semibold">{{ t.name }}</p>
                <p class="text-xs text-muted-foreground">{{ t.role }}, {{ t.company }}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
</template>
