<script setup>
import { FEATURES } from '@/lib/constants'
import SectionHeader from '@/components/common/SectionHeader.vue'
import IconCard from '@/components/common/IconCard.vue'
import CtaSection from '@/components/sections/CtaSection.vue'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

const techStack = [
  { name: 'Vue 3', version: 'v3.5', description: 'Composition API와 <script setup> 문법으로 더 직관적인 컴포넌트 개발' },
  { name: 'Vite 6', version: 'v6.x', description: '번개처럼 빠른 HMR과 최적화된 프로덕션 빌드' },
  { name: 'Tailwind CSS', version: 'v4.x', description: '@tailwindcss/vite 플러그인 기반, CSS 파일 내 설정 방식' },
  { name: 'shadcn-vue', version: 'Latest', description: 'Radix Vue 기반의 접근성 높은 headless UI 컴포넌트' },
  { name: 'Quasar', version: 'v2.x', description: 'QTable, QSkeleton 등 복잡한 UI를 위한 엔터프라이즈 컴포넌트' },
  { name: 'Pinia', version: 'v2.x', description: 'Vue 공식 상태 관리 라이브러리, Vuex보다 간결한 API' },
  { name: 'Vue Router', version: 'v4.x', description: '중첩 라우팅과 레이아웃 분리로 마케팅/대시보드 구조화' },
  { name: 'JavaScript', version: 'ES2022+', description: '순수 JavaScript 환경으로 별도 타입 설정 없이 바로 시작' },
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="py-20 sm:py-28">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <Badge variant="secondary" class="mb-4">Features</Badge>
          <h1 class="text-4xl font-bold tracking-tight sm:text-5xl">
            강력한 기능의 조합
          </h1>
          <p class="mt-6 text-lg text-muted-foreground">
            현대적인 Vue 개발에 필요한 모든 도구가 통합되어 있습니다.
            각 기술의 장점을 극대화하여 효율적인 개발 환경을 제공합니다.
          </p>
        </div>
      </div>
    </section>

    <Separator />

    <!-- Features Grid -->
    <section class="py-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="핵심 기능"
          description="스타터킷에 포함된 주요 기능들입니다."
          centered
        />
        <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

    <!-- 기술 스택 상세 -->
    <section class="border-y bg-muted/40 py-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader title="기술 스택 상세" centered />
        <div class="mt-12 grid gap-8 sm:grid-cols-2">
          <div v-for="tech in techStack" :key="tech.name" class="space-y-2">
            <div class="flex items-center gap-2">
              <Badge variant="outline">{{ tech.version }}</Badge>
              <h3 class="font-semibold">{{ tech.name }}</h3>
            </div>
            <p class="text-sm text-muted-foreground">{{ tech.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <CtaSection />
  </div>
</template>
