<script setup>
import { ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { Menu, X } from '@lucide/vue'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { NAV_LINKS } from '@/lib/constants'
import ThemeToggle from './ThemeToggle.vue'

const route = useRoute()
const mobileOpen = ref(false)

watch(() => route.path, () => { mobileOpen.value = false })
</script>

<template>
  <header class="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div class="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
      <RouterLink to="/" class="flex items-center gap-2">
        <div class="flex size-7 items-center justify-center rounded-lg bg-primary">
          <span class="text-xs font-bold text-primary-foreground">V</span>
        </div>
        <span class="font-bold">Vue Starter</span>
      </RouterLink>

      <nav class="hidden items-center gap-6 md:flex">
        <RouterLink
          v-for="link in NAV_LINKS"
          :key="link.href"
          :to="link.href"
          class="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          {{ link.label }}
        </RouterLink>
      </nav>

      <div class="flex items-center gap-2">
        <ThemeToggle />
        <Button asChild class="hidden md:inline-flex" size="sm">
          <RouterLink to="/dashboard">대시보드 시작</RouterLink>
        </Button>
        <Button variant="ghost" size="icon-sm" class="md:hidden" @click="mobileOpen = !mobileOpen">
          <X v-if="mobileOpen" class="size-5" />
          <Menu v-else class="size-5" />
        </Button>
      </div>
    </div>

    <Transition
      enter-active-class="transition-all duration-200"
      enter-from-class="opacity-0 -translate-y-2"
      leave-active-class="transition-all duration-200"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="mobileOpen" class="border-t bg-background px-4 pb-4 pt-2 md:hidden">
        <nav class="flex flex-col gap-2">
          <RouterLink
            v-for="link in NAV_LINKS"
            :key="link.href"
            :to="link.href"
            class="py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            @click="mobileOpen = false"
          >
            {{ link.label }}
          </RouterLink>
          <Separator />
          <Button asChild size="sm">
            <RouterLink to="/dashboard" @click="mobileOpen = false">대시보드 시작</RouterLink>
          </Button>
        </nav>
      </div>
    </Transition>
  </header>
</template>
