<script setup>
import AppSidebar from '@/components/layout/AppSidebar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="flex min-h-screen">
    <AppSidebar />
    <main class="flex-1 overflow-auto">
      <div class="p-6 md:p-8">
        <RouterView />
      </div>
    </main>
  </div>
</template>
