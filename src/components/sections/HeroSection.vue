<script setup>
import { RouterLink } from 'vue-router'
import { ArrowRight, ExternalLink } from '@lucide/vue'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
</script>

<template>
  <section class="relative overflow-hidden py-20 sm:py-32">
    <div class="pointer-events-none absolute inset-0 -z-10">
      <div class="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-primary/5 to-transparent" />
      <div class="absolute left-1/2 top-1/4 size-[600px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
    </div>

    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <Badge variant="secondary" class="mb-6 px-4 py-1.5 text-sm">
          🚀 Vue 3 + Vite 6 + Tailwind v4 기반
        </Badge>

        <h1 class="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          즉시 시작하는
          <br />
          <span class="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            모던 Vue 개발
          </span>
        </h1>

        <p class="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Vue 3, Vite, Tailwind CSS v4, shadcn-vue, Quasar가 통합된
          <br class="hidden sm:block" />
          프로덕션 레디 스타터킷으로 바로 개발을 시작하세요.
        </p>

        <div class="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button size="lg" as-child class="w-full sm:w-auto">
            <RouterLink to="/dashboard">
              대시보드 시작하기
              <ArrowRight class="ml-2 size-4" />
            </RouterLink>
          </Button>
          <Button size="lg" variant="outline" as-child class="w-full sm:w-auto">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <ExternalLink class="mr-2 size-4" />
              GitHub에서 보기
            </a>
          </Button>
        </div>

        <div class="mt-10 flex items-center justify-center gap-6 text-sm text-muted-foreground">
          <span class="flex items-center gap-1.5">
            <span class="size-1.5 rounded-full bg-green-500" />
            무료 오픈소스
          </span>
          <span class="flex items-center gap-1.5">
            <span class="size-1.5 rounded-full bg-green-500" />
            순수 JavaScript 기반
          </span>
          <span class="flex items-center gap-1.5">
            <span class="size-1.5 rounded-full bg-green-500" />
            다크 모드 지원
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
