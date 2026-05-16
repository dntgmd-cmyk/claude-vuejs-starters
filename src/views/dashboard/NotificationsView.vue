<script setup>
import { ref, computed } from 'vue'
import { Bell, CheckCheck } from '@lucide/vue'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import PageHeader from '@/components/common/PageHeader.vue'
import EmptyState from '@/components/common/EmptyState.vue'

const notifications = ref([
  {
    id: 1,
    title: '새 사용자 가입',
    message: '김민준 님이 Pro 플랜으로 가입했습니다.',
    time: '5분 전',
    read: false,
    type: 'user',
  },
  {
    id: 2,
    title: '결제 완료',
    message: '이서연 님의 월간 결제가 완료되었습니다. ₩49,000',
    time: '1시간 전',
    read: false,
    type: 'payment',
  },
  {
    id: 3,
    title: '보고서 생성 완료',
    message: '5월 월간 보고서가 준비되었습니다. 다운로드하세요.',
    time: '3시간 전',
    read: true,
    type: 'report',
  },
  {
    id: 4,
    title: '시스템 업데이트',
    message: '새로운 기능이 추가되었습니다. 변경 사항을 확인하세요.',
    time: '1일 전',
    read: true,
    type: 'system',
  },
])

const unreadCount = computed(() => notifications.value.filter(n => !n.read).length)

function markAllRead() {
  notifications.value.forEach(n => (n.read = true))
}

function markRead(id) {
  const n = notifications.value.find(n => n.id === id)
  if (n) n.read = true
}

const typeColor = {
  user: 'bg-blue-100 text-blue-600',
  payment: 'bg-green-100 text-green-600',
  report: 'bg-purple-100 text-purple-600',
  system: 'bg-orange-100 text-orange-600',
}
</script>

<template>
  <div class="space-y-6">
    <PageHeader
      title="Notifications"
      description="알림 메시지를 확인하세요."
      :breadcrumbs="[{ label: 'Dashboard', href: '/dashboard' }, { label: 'Notifications' }]"
    >
      <template #action>
        <div class="flex items-center gap-2">
          <Badge v-if="unreadCount > 0">{{ unreadCount }}개 미확인</Badge>
          <Button variant="outline" size="sm" @click="markAllRead">
            <CheckCheck class="mr-2 size-4" />
            모두 읽음
          </Button>
        </div>
      </template>
    </PageHeader>

    <div class="rounded-xl border bg-card divide-y">
      <template v-if="notifications.length">
        <div
          v-for="notification in notifications"
          :key="notification.id"
          :class="[
            'flex items-start gap-4 p-4 transition-colors cursor-pointer',
            !notification.read && 'bg-primary/5 hover:bg-primary/10',
            notification.read && 'hover:bg-muted/50',
          ]"
          @click="markRead(notification.id)"
        >
          <div :class="['flex size-9 shrink-0 items-center justify-center rounded-full', typeColor[notification.type]]">
            <Bell class="size-4" />
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center justify-between gap-2">
              <p class="text-sm font-medium">{{ notification.title }}</p>
              <span class="text-xs text-muted-foreground shrink-0">{{ notification.time }}</span>
            </div>
            <p class="mt-0.5 text-sm text-muted-foreground">{{ notification.message }}</p>
          </div>
          <div v-if="!notification.read" class="mt-1 size-2 shrink-0 rounded-full bg-primary" />
        </div>
      </template>

      <EmptyState
        v-else
        title="알림이 없습니다"
        description="새로운 알림이 도착하면 여기에 표시됩니다."
      />
    </div>
  </div>
</template>
