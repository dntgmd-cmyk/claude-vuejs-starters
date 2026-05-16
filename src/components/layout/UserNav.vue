<script setup>
import { User } from '@lucide/vue'
import { Button } from '@/components/ui/button'
</script>

<template>
  <Button variant="ghost" size="icon-sm" aria-label="사용자 메뉴">
    <div class="flex size-7 items-center justify-center rounded-full bg-primary/10">
      <User class="size-4 text-primary" />
    </div>
  </Button>
</template>
