<script setup>
import { Download, Plus, FileText } from '@lucide/vue'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import PageHeader from '@/components/common/PageHeader.vue'

const reports = [
  { id: 1, name: '5월 월간 보고서', type: '월간', status: 'ready', size: '2.4 MB', date: '2025-05-01' },
  { id: 2, name: 'Q1 분기 보고서', type: '분기', status: 'ready', size: '8.1 MB', date: '2025-04-01' },
  { id: 3, name: '사용자 활동 분석', type: '커스텀', status: 'processing', size: '-', date: '2025-05-15' },
  { id: 4, name: '4월 월간 보고서', type: '월간', status: 'ready', size: '2.1 MB', date: '2025-04-01' },
  { id: 5, name: '매출 트렌드 분석', type: '커스텀', status: 'ready', size: '1.8 MB', date: '2025-05-10' },
]

const storageUsed = 67
</script>

<template>
  <div class="space-y-8">
    <PageHeader
      title="Reports"
      description="보고서를 생성하고 다운로드하세요."
      :breadcrumbs="[{ label: 'Dashboard', href: '/dashboard' }, { label: 'Reports' }]"
    >
      <template #action>
        <Button size="sm">
          <Plus class="mr-2 size-4" />
          새 보고서
        </Button>
      </template>
    </PageHeader>

    <div class="grid gap-6 lg:grid-cols-4">
      <div class="lg:col-span-3 space-y-3">
        <div
          v-for="report in reports"
          :key="report.id"
          class="flex items-center justify-between rounded-xl border bg-card p-4 hover:shadow-sm transition-shadow"
        >
          <div class="flex items-center gap-4">
            <div class="flex size-10 items-center justify-center rounded-lg bg-primary/10">
              <FileText class="size-5 text-primary" />
            </div>
            <div>
              <p class="font-medium">{{ report.name }}</p>
              <p class="text-xs text-muted-foreground">{{ report.date }} · {{ report.size }}</p>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <Badge :variant="report.type === '월간' ? 'secondary' : report.type === '분기' ? 'default' : 'outline'">
              {{ report.type }}
            </Badge>
            <span v-if="report.status === 'processing'" class="text-xs text-muted-foreground">생성 중...</span>
            <Button v-else variant="ghost" size="icon-sm" :aria-label="`${report.name} 다운로드`">
              <Download class="size-4" />
            </Button>
          </div>
        </div>
      </div>

      <div class="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle class="text-sm">스토리지 사용량</CardTitle>
          </CardHeader>
          <CardContent class="space-y-3">
            <Progress :model-value="storageUsed" />
            <div class="flex justify-between text-xs text-muted-foreground">
              <span>6.7 GB 사용</span>
              <span>10 GB 중</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle class="text-sm">요약</CardTitle>
          </CardHeader>
          <CardContent class="space-y-2 text-sm">
            <div class="flex justify-between">
              <span class="text-muted-foreground">전체 보고서</span>
              <span class="font-medium">5</span>
            </div>
            <div class="flex justify-between">
              <span class="text-muted-foreground">생성 중</span>
              <span class="font-medium">1</span>
            </div>
            <div class="flex justify-between">
              <span class="text-muted-foreground">이번 달 생성</span>
              <span class="font-medium">3</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
</template>
