<script setup>
import { ExternalLink, MessageCircle, BookOpen, Mail } from '@lucide/vue'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import PageHeader from '@/components/common/PageHeader.vue'

const faqs = [
  {
    q: 'shadcn-vue와 Quasar를 함께 사용할 수 있나요?',
    a: '네, 이 스타터킷의 핵심 기능입니다. shadcn-vue는 기본 UI 컴포넌트에, Quasar는 QTable처럼 복잡한 컴포넌트에 사용합니다.',
  },
  {
    q: 'Tailwind CSS v4 설정 방법이 v3와 다른가요?',
    a: 'Tailwind v4는 tailwind.config.js 대신 CSS 파일 내 @theme 디렉티브를 사용하며, @tailwindcss/vite 플러그인으로 설정합니다.',
  },
  {
    q: '다크 모드는 어떻게 구현되어 있나요?',
    a: 'Pinia의 useThemeStore에서 상태를 관리하고, App.vue에서 HTML 요소에 dark 클래스를 토글합니다. CSS는 .dark 클래스 기반으로 동작합니다.',
  },
  {
    q: '새 대시보드 페이지를 추가하려면?',
    a: 'src/views/dashboard/에 새 Vue 파일 생성 후, router/index.js의 dashboard children 배열에 라우트를 추가하고, lib/constants.js의 SIDEBAR_LINKS에 메뉴 항목을 추가하세요.',
  },
]

const supportOptions = [
  {
    icon: BookOpen,
    title: '문서',
    description: '상세한 API 문서와 가이드를 확인하세요.',
    cta: '문서 보기',
  },
  {
    icon: MessageCircle,
    title: '커뮤니티',
    description: '다른 개발자들과 질문을 나눠보세요.',
    cta: '커뮤니티 가기',
  },
  {
    icon: Mail,
    title: '이메일 지원',
    description: '직접 문의사항을 보내주세요.',
    cta: '이메일 보내기',
  },
]
</script>

<template>
  <div class="space-y-8">
    <PageHeader
      title="Help"
      description="도움말과 자주 묻는 질문을 확인하세요."
      :breadcrumbs="[{ label: 'Dashboard', href: '/dashboard' }, { label: 'Help' }]"
    />

    <div class="mx-auto max-w-xl">
      <Input placeholder="질문을 검색하세요..." class="h-11 text-base" />
    </div>

    <div class="grid gap-4 sm:grid-cols-3">
      <Card v-for="support in supportOptions" :key="support.title" class="hover:shadow-sm transition-shadow">
        <CardContent class="p-6">
          <div class="flex size-10 items-center justify-center rounded-lg bg-primary/10 mb-3">
            <component :is="support.icon" class="size-5 text-primary" />
          </div>
          <h3 class="font-semibold">{{ support.title }}</h3>
          <p class="mt-1 text-sm text-muted-foreground">{{ support.description }}</p>
          <Button variant="outline" size="sm" class="mt-4 w-full">
            {{ support.cta }}
            <ExternalLink class="ml-2 size-3" />
          </Button>
        </CardContent>
      </Card>
    </div>

    <div>
      <h2 class="text-lg font-semibold mb-4">자주 묻는 질문</h2>
      <div class="space-y-3">
        <Card v-for="faq in faqs" :key="faq.q">
          <CardContent class="p-5">
            <p class="font-medium">{{ faq.q }}</p>
            <p class="mt-2 text-sm text-muted-foreground">{{ faq.a }}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
</template>
