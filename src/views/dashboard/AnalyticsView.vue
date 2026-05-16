<script setup>
import PageHeader from '@/components/common/PageHeader.vue'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'

const metrics = [
  { label: '총 방문자', value: '48,291', change: '+12.3%', positive: true },
  { label: '순 방문자', value: '31,024', change: '+8.7%', positive: true },
  { label: '페이지뷰', value: '128,430', change: '+15.2%', positive: true },
  { label: '이탈율', value: '34.8%', change: '+2.1%', positive: false },
]

const trafficSources = [
  { label: '자연 검색', value: 42, change: '+5%' },
  { label: '직접 방문', value: 28, change: '+2%' },
  { label: 'SNS', value: 18, change: '+8%' },
  { label: '이메일', value: 12, change: '-1%' },
]

const topPages = [
  { path: '/', views: '12,420', bounce: '34%' },
  { path: '/features', views: '8,210', bounce: '28%' },
  { path: '/pricing', views: '6,830', bounce: '42%' },
  { path: '/dashboard', views: '5,120', bounce: '18%' },
  { path: '/about', views: '3,440', bounce: '51%' },
]
</script>

<template>
  <div class="space-y-8">
    <PageHeader
      title="Analytics"
      description="방문자 데이터와 트래픽 현황을 분석하세요."
      :breadcrumbs="[{ label: 'Dashboard', href: '/dashboard' }, { label: 'Analytics' }]"
    />

    <!-- 기간 탭 -->
    <Tabs default-value="7d">
      <TabsList>
        <TabsTrigger value="1d">오늘</TabsTrigger>
        <TabsTrigger value="7d">7일</TabsTrigger>
        <TabsTrigger value="30d">30일</TabsTrigger>
        <TabsTrigger value="90d">90일</TabsTrigger>
      </TabsList>

      <TabsContent value="7d" class="mt-6 space-y-6">
        <!-- 주요 지표 -->
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card v-for="metric in metrics" :key="metric.label">
            <CardHeader class="pb-2">
              <CardDescription>{{ metric.label }}</CardDescription>
            </CardHeader>
            <CardContent>
              <p class="text-2xl font-bold">{{ metric.value }}</p>
              <Badge :variant="metric.positive ? 'default' : 'destructive'" class="mt-1 text-xs">
                {{ metric.change }}
              </Badge>
            </CardContent>
          </Card>
        </div>

        <!-- 차트 영역 -->
        <div class="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle class="text-base">방문자 추이</CardTitle>
            </CardHeader>
            <CardContent>
              <div class="flex h-56 items-center justify-center rounded-lg bg-muted/50 text-sm text-muted-foreground">
                라인 차트 영역 (ECharts / Chart.js 연동)
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle class="text-base">유입 경로</CardTitle>
            </CardHeader>
            <CardContent class="space-y-4">
              <div v-for="source in trafficSources" :key="source.label" class="space-y-1.5">
                <div class="flex items-center justify-between text-sm">
                  <span>{{ source.label }}</span>
                  <span class="font-medium">{{ source.value }}%</span>
                </div>
                <Progress :model-value="source.value" />
              </div>
            </CardContent>
          </Card>
        </div>

        <!-- 인기 페이지 -->
        <Card>
          <CardHeader>
            <CardTitle class="text-base">인기 페이지</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="space-y-3">
              <div
                v-for="(page, i) in topPages"
                :key="page.path"
                class="flex items-center justify-between rounded-lg px-3 py-2 hover:bg-muted/50"
              >
                <div class="flex items-center gap-3">
                  <span class="text-sm font-medium text-muted-foreground">{{ i + 1 }}</span>
                  <code class="text-sm font-mono">{{ page.path }}</code>
                </div>
                <div class="flex items-center gap-6 text-sm">
                  <span class="font-medium">{{ page.views }}</span>
                  <span class="text-muted-foreground">이탈율 {{ page.bounce }}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent v-for="tab in ['1d', '30d', '90d']" :key="tab" :value="tab" class="mt-6">
        <div class="flex h-48 items-center justify-center rounded-lg border border-dashed text-sm text-muted-foreground">
          {{ tab }} 기간 데이터 영역
        </div>
      </TabsContent>
    </Tabs>
  </div>
</template>
