<script setup>
import { FEATURES } from '@/lib/constants'
import SectionHeader from '@/components/common/SectionHeader.vue'
import IconCard from '@/components/common/IconCard.vue'
</script>

<template>
  <section class="py-20 sm:py-28">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Features"
        title="모든 것이 준비되어 있습니다"
        description="프로젝트를 빠르게 시작하는 데 필요한 모든 것이 포함되어 있습니다."
        centered
      />
      <div class="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <IconCard
          v-for="feature in FEATURES"
          :key="feature.title"
          :icon="feature.icon"
          :title="feature.title"
          :description="feature.description"
        />
      </div>
    </div>
  </section>
</template>
