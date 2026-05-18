<script setup>
import { useRouter, RouterLink } from 'vue-router'
import { ArrowLeft, Home } from '@lucide/vue'
import { Button } from '@/components/ui/button'

const router = useRouter()
</script>

<template>
  <div class="flex min-h-screen flex-col items-center justify-center gap-6 text-center">
    <div class="space-y-2">
      <h1 class="text-8xl font-bold text-primary">404</h1>
      <h2 class="text-2xl font-semibold">페이지를 찾을 수 없습니다</h2>
      <p class="text-muted-foreground">요청하신 페이지가 존재하지 않거나 이동되었습니다.</p>
    </div>
    <div class="flex items-center gap-3">
      <Button variant="outline" @click="router.back()">
        <ArrowLeft class="mr-2 size-4" />
        이전 페이지
      </Button>
      <Button as-child>
        <RouterLink to="/">
          <Home class="mr-2 size-4" />
          홈으로
        </RouterLink>
      </Button>
    </div>
  </div>
</template>
