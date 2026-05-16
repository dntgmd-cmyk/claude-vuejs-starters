<script setup>
import SectionHeader from '@/components/common/SectionHeader.vue'
import CtaSection from '@/components/sections/CtaSection.vue'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

const principles = [
  {
    emoji: '⚡',
    title: '즉시 사용 가능',
    description: 'npm install 한 번으로 모든 설정이 완료된 개발 환경을 제공합니다.',
  },
  {
    emoji: '🎨',
    title: '디자인 시스템 통합',
    description: 'shadcn-vue와 Quasar의 장점을 각각 적절히 활용합니다.',
  },
  {
    emoji: '🌙',
    title: '다크 모드 우선',
    description: 'CSS 변수 기반으로 구현된 완벽한 다크/라이트 모드 전환을 지원합니다.',
  },
  {
    emoji: '📱',
    title: '모바일 퍼스트',
    description: '모든 컴포넌트가 모바일 환경에서도 완벽하게 동작합니다.',
  },
  {
    emoji: '🔧',
    title: '쉬운 커스터마이징',
    description: 'JavaScript 기반으로 별도 타입 설정 없이 바로 시작하고 수정할 수 있습니다.',
  },
  {
    emoji: '🚀',
    title: '성능 최적화',
    description: 'Vite의 Tree-shaking과 코드 스플리팅으로 최적화된 번들을 제공합니다.',
  },
]
</script>

<template>
  <div>
    <section class="py-20 sm:py-28">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-3xl">
          <Badge variant="secondary" class="mb-4">About</Badge>
          <h1 class="text-4xl font-bold tracking-tight sm:text-5xl">
            왜 Vue Starter인가?
          </h1>
          <p class="mt-6 text-lg leading-relaxed text-muted-foreground">
            Vue.js 생태계의 최신 도구들을 통합하여 개발자가 환경 설정에 시간을 낭비하지 않고
            바로 비즈니스 로직에 집중할 수 있도록 만들어졌습니다.
          </p>
        </div>
      </div>
    </section>

    <Separator />

    <section class="py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader title="설계 원칙" />
        <div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card v-for="principle in principles" :key="principle.title">
            <CardContent class="p-6">
              <p class="text-2xl">{{ principle.emoji }}</p>
              <h3 class="mt-3 font-semibold">{{ principle.title }}</h3>
              <p class="mt-2 text-sm text-muted-foreground">{{ principle.description }}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    <CtaSection />
  </div>
</template>
