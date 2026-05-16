<script setup>
import { RouterLink } from 'vue-router'
import { ArrowRight } from '@lucide/vue'
import { Button } from '@/components/ui/button'
</script>

<template>
  <section class="py-20 sm:py-28">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="relative overflow-hidden rounded-2xl bg-primary px-8 py-16 text-center sm:px-16">
        <div class="pointer-events-none absolute inset-0">
          <div class="absolute left-1/4 top-0 size-96 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />
          <div class="absolute right-1/4 bottom-0 size-96 translate-y-1/2 rounded-full bg-white/10 blur-3xl" />
        </div>
        <div class="relative">
          <h2 class="text-3xl font-bold text-white sm:text-4xl">지금 바로 시작하세요</h2>
          <p class="mx-auto mt-4 max-w-xl text-primary-foreground/80">
            Vue.js + Vite + Tailwind CSS + shadcn-vue + Quasar 스타터킷으로
            프로젝트를 빠르게 시작하세요.
          </p>
          <div class="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" variant="secondary" as-child>
              <RouterLink to="/dashboard">
                대시보드 시작하기
                <ArrowRight class="ml-2 size-4" />
              </RouterLink>
            </Button>
            <Button size="lg" variant="ghost" class="text-white hover:bg-white/10 hover:text-white" as-child>
              <RouterLink to="/features">더 알아보기</RouterLink>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
