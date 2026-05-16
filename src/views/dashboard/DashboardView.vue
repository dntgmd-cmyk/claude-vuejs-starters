<script setup>
import { Plus, TrendingUp, Users, DollarSign, FileText } from '@lucide/vue'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import PageHeader from '@/components/common/PageHeader.vue'
import StatCard from '@/components/common/StatCard.vue'

const recentActivity = [
  { id: 1, user: '김민준', action: '신규 가입', time: '5분 전', status: 'success' },
  { id: 2, user: '이서연', action: 'Pro 업그레이드', time: '12분 전', status: 'success' },
  { id: 3, user: '박지훈', action: '보고서 생성', time: '1시간 전', status: 'pending' },
  { id: 4, user: '최유나', action: '결제 실패', time: '2시간 전', status: 'error' },
  { id: 5, user: '정민서', action: 'API 키 발급', time: '3시간 전', status: 'success' },
]

const statusVariant = {
  success: 'default',
  pending: 'secondary',
  error: 'destructive',
}

const statusLabel = {
  success: '완료',
  pending: '처리중',
  error: '실패',
}

const summaryItems = [
  { label: '신규 가입', value: '342' },
  { label: '활성 사용자', value: '8,921' },
  { label: '이번달 결제', value: '₩8.2M' },
  { label: '문서 생성', value: '1,204' },
]
</script>

<template>
  <div class="space-y-8">
    <PageHeader
      title="Dashboard"
      description="서비스 현황을 한눈에 확인하세요."
      :breadcrumbs="[{ label: '홈', href: '/' }, { label: 'Dashboard' }]"
    >
      <template #action>
        <Button size="sm">
          <Plus class="mr-2 size-4" />
          새 프로젝트
        </Button>
      </template>
    </PageHeader>

    <!-- 통계 카드 -->
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard label="총 사용자" value="12,345" trend="+12% 이번 달" :positive="true" />
      <StatCard label="월 매출" value="₩8,240만" trend="+18% 전월 대비" :positive="true" />
      <StatCard label="활성 프로젝트" value="234" trend="+5% 이번 주" :positive="true" />
      <StatCard label="전환율" value="3.24%" trend="-0.4% 전월 대비" :positive="false" />
    </div>

    <!-- 차트 & 사용자 현황 -->
    <div class="grid gap-6 lg:grid-cols-3">
      <Card class="lg:col-span-2">
        <CardHeader>
          <CardTitle class="flex items-center gap-2 text-base">
            <TrendingUp class="size-4" />
            매출 추이
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div class="flex h-48 items-center justify-center rounded-lg bg-muted/50 text-sm text-muted-foreground">
            차트 라이브러리 연동 영역 (Chart.js, ECharts 등)
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle class="flex items-center gap-2 text-base">
            <Users class="size-4" />
            사용자 현황
          </CardTitle>
        </CardHeader>
        <CardContent class="space-y-4">
          <div v-for="item in summaryItems" :key="item.label" class="flex items-center justify-between">
            <span class="text-sm text-muted-foreground">{{ item.label }}</span>
            <span class="text-sm font-semibold">{{ item.value }}</span>
          </div>
        </CardContent>
      </Card>
    </div>

    <!-- 최근 활동 테이블 (shadcn-vue Table) -->
    <Card>
      <CardHeader>
        <CardTitle class="text-base">최근 활동</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>사용자</TableHead>
              <TableHead>액션</TableHead>
              <TableHead>시간</TableHead>
              <TableHead>상태</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-for="row in recentActivity" :key="row.id">
              <TableCell class="font-medium">{{ row.user }}</TableCell>
              <TableCell>{{ row.action }}</TableCell>
              <TableCell class="text-muted-foreground">{{ row.time }}</TableCell>
              <TableCell>
                <Badge :variant="statusVariant[row.status]">
                  {{ statusLabel[row.status] }}
                </Badge>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  </div>
</template>
