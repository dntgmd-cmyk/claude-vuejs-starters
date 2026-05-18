<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { ChevronLeft, ChevronRight, Menu } from '@lucide/vue'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import SidebarNav from './SidebarNav.vue'
import UserNav from './UserNav.vue'
import ThemeToggle from './ThemeToggle.vue'

const collapsed = ref(false)
const mobileOpen = ref(false)
</script>

<template>
  <!-- 데스크탑 사이드바 -->
  <aside
    :class="[
      'hidden md:flex flex-col border-r bg-sidebar transition-all duration-300',
      collapsed ? 'w-16' : 'w-64',
    ]"
  >
    <div class="flex h-14 items-center justify-between border-b px-4">
      <RouterLink v-if="!collapsed" to="/" class="flex items-center gap-2">
        <div class="flex size-7 items-center justify-center rounded-lg bg-primary">
          <span class="text-xs font-bold text-primary-foreground">V</span>
        </div>
        <span class="font-bold">Starter</span>
      </RouterLink>
      <Button
        variant="ghost"
        size="icon-sm"
        :class="collapsed ? 'mx-auto' : ''"
        :aria-label="collapsed ? '사이드바 펼치기' : '사이드바 접기'"
        @click="collapsed = !collapsed"
      >
        <ChevronRight v-if="collapsed" class="size-4" />
        <ChevronLeft v-else class="size-4" />
      </Button>
    </div>

    <div class="flex-1 overflow-y-auto py-4">
      <SidebarNav :collapsed="collapsed" />
    </div>

    <Separator />
    <div :class="['flex items-center p-3', collapsed ? 'flex-col gap-3 justify-center' : 'justify-between']">
      <UserNav />
      <ThemeToggle />
    </div>
  </aside>

  <!-- 모바일: 오버레이 사이드바 -->
  <div class="md:hidden">
    <Button
      variant="ghost"
      size="icon"
      class="fixed left-3 top-3 z-40"
      @click="mobileOpen = true"
    >
      <Menu class="size-5" />
    </Button>

    <Transition
      enter-active-class="transition-opacity duration-200"
      enter-from-class="opacity-0"
      leave-active-class="transition-opacity duration-200"
      leave-to-class="opacity-0"
    >
      <div
        v-if="mobileOpen"
        class="fixed inset-0 z-40 bg-black/50"
        aria-hidden="true"
        @click="mobileOpen = false"
      />
    </Transition>

    <Transition
      enter-active-class="transition-transform duration-300"
      enter-from-class="-translate-x-full"
      leave-active-class="transition-transform duration-300"
      leave-to-class="-translate-x-full"
    >
      <aside
        v-if="mobileOpen"
        role="dialog"
        aria-modal="true"
        aria-label="내비게이션 메뉴"
        class="fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r bg-sidebar"
        @keydown.esc="mobileOpen = false"
      >
        <div class="flex h-14 items-center border-b px-4">
          <RouterLink to="/" class="flex items-center gap-2" @click="mobileOpen = false">
            <div class="flex size-7 items-center justify-center rounded-lg bg-primary">
              <span class="text-xs font-bold text-primary-foreground">V</span>
            </div>
            <span class="font-bold">Starter</span>
          </RouterLink>
        </div>
        <div class="flex-1 overflow-y-auto py-4">
          <SidebarNav @click="mobileOpen = false" />
        </div>
        <Separator />
        <div class="flex items-center justify-between p-3">
          <UserNav />
          <ThemeToggle />
        </div>
      </aside>
    </Transition>
  </div>
</template>
