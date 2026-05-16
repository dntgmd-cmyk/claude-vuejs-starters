<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import {
  Bell, CheckCircle2, AlertCircle, Info, Download, Heart,
  Trash2, Edit2, Plus, Search, Mail, Send,
} from '@lucide/vue'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from '@/components/ui/table'
import SectionHeader from '@/components/common/SectionHeader.vue'

const $q = useQuasar()

const switchVal = ref(true)
const inputVal = ref('')
const progressVal = ref(65)
const skeletonVisible = ref(true)

const sampleRows = [
  { name: '김민준', email: 'minjun@example.com', role: '관리자', status: 'active' },
  { name: '이서연', email: 'seoyeon@example.com', role: '편집자', status: 'active' },
  { name: '박지훈', email: 'jihun@example.com', role: '뷰어', status: 'inactive' },
]

const quasarColumns = [
  { name: 'name', label: '이름', field: 'name', sortable: true, align: 'left' },
  { name: 'email', label: '이메일', field: 'email', sortable: true, align: 'left' },
  { name: 'role', label: '역할', field: 'role', sortable: true, align: 'center' },
  { name: 'status', label: '상태', field: 'status', sortable: true, align: 'center' },
]

function showNotify(type) {
  const configs = {
    success: { message: '성공적으로 저장되었습니다!', color: 'positive', icon: 'check_circle' },
    warning: { message: '주의가 필요한 작업입니다.', color: 'warning', icon: 'warning' },
    error: { message: '오류가 발생했습니다. 다시 시도해주세요.', color: 'negative', icon: 'error' },
    info: { message: '새로운 업데이트가 있습니다.', color: 'info', icon: 'info' },
  }
  $q.notify(configs[type])
}
</script>

<template>
  <div>
    <!-- 헤더 -->
    <section class="border-b bg-muted/30 py-16">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <Badge variant="secondary" class="mb-4">Examples</Badge>
          <h1 class="text-4xl font-bold tracking-tight sm:text-5xl">컴포넌트 예제</h1>
          <p class="mt-4 text-lg text-muted-foreground">
            shadcn-vue와 Quasar 컴포넌트를 함께 사용하는 실제 예제입니다.
          </p>
        </div>
      </div>
    </section>

    <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 space-y-20">

      <!-- ─── Buttons ─── -->
      <section>
        <SectionHeader eyebrow="shadcn-vue" title="Button" description="다양한 variant와 size를 지원하는 버튼 컴포넌트" />
        <div class="mt-8 space-y-6">
          <Card>
            <CardHeader><CardTitle class="text-sm text-muted-foreground">Variants</CardTitle></CardHeader>
            <CardContent class="flex flex-wrap gap-3">
              <Button variant="default">Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="link">Link</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle class="text-sm text-muted-foreground">Sizes</CardTitle></CardHeader>
            <CardContent class="flex flex-wrap items-center gap-3">
              <Button size="lg">Large</Button>
              <Button size="default">Default</Button>
              <Button size="sm">Small</Button>
              <Button size="icon"><Plus class="size-4" /></Button>
              <Button size="icon-sm"><Plus class="size-4" /></Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle class="text-sm text-muted-foreground">With Icons</CardTitle></CardHeader>
            <CardContent class="flex flex-wrap gap-3">
              <Button><Mail class="mr-2 size-4" />이메일 보내기</Button>
              <Button variant="outline"><Download class="mr-2 size-4" />다운로드</Button>
              <Button variant="secondary"><Heart class="mr-2 size-4" />좋아요</Button>
              <Button variant="destructive"><Trash2 class="mr-2 size-4" />삭제</Button>
              <Button disabled>비활성</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      <!-- ─── Badge ─── -->
      <section>
        <SectionHeader eyebrow="shadcn-vue" title="Badge" description="상태와 카테고리를 표시하는 뱃지 컴포넌트" />
        <Card class="mt-8">
          <CardContent class="pt-6 flex flex-wrap gap-3">
            <Badge variant="default">Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="secondary" class="text-xs">New</Badge>
            <Badge>인기</Badge>
            <Badge variant="outline">Beta</Badge>
            <Badge variant="destructive">긴급</Badge>
          </CardContent>
        </Card>
      </section>

      <Separator />

      <!-- ─── Input ─── -->
      <section>
        <SectionHeader eyebrow="shadcn-vue" title="Input" description="텍스트 입력 컴포넌트" />
        <Card class="mt-8">
          <CardContent class="pt-6 space-y-4 max-w-md">
            <div class="space-y-2">
              <label class="text-sm font-medium">기본 입력</label>
              <Input v-model="inputVal" placeholder="텍스트를 입력하세요..." />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-medium">이메일</label>
              <Input type="email" placeholder="hello@example.com" />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-medium">비밀번호</label>
              <Input type="password" placeholder="비밀번호 입력" />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-medium">비활성</label>
              <Input disabled placeholder="비활성 상태" />
            </div>
            <div class="relative">
              <Search class="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <Input class="pl-9" placeholder="검색..." />
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator />

      <!-- ─── Switch ─── -->
      <section>
        <SectionHeader eyebrow="shadcn-vue" title="Switch" description="토글 스위치 컴포넌트" />
        <Card class="mt-8">
          <CardContent class="pt-6 space-y-4">
            <div class="flex items-center justify-between max-w-sm">
              <div>
                <p class="text-sm font-medium">알림 받기</p>
                <p class="text-xs text-muted-foreground">이메일로 업데이트를 받습니다.</p>
              </div>
              <Switch v-model:checked="switchVal" />
            </div>
            <div class="flex items-center justify-between max-w-sm">
              <div>
                <p class="text-sm font-medium">마케팅 이메일</p>
                <p class="text-xs text-muted-foreground">프로모션 정보를 받습니다.</p>
              </div>
              <Switch :checked="false" />
            </div>
            <div class="flex items-center justify-between max-w-sm">
              <div>
                <p class="text-sm font-medium">비활성 스위치</p>
                <p class="text-xs text-muted-foreground">변경 불가능한 설정입니다.</p>
              </div>
              <Switch :checked="true" disabled />
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator />

      <!-- ─── Progress ─── -->
      <section>
        <SectionHeader eyebrow="shadcn-vue" title="Progress" description="진행 상태 표시 컴포넌트" />
        <Card class="mt-8">
          <CardContent class="pt-6 space-y-6 max-w-md">
            <div class="space-y-2">
              <div class="flex justify-between text-sm">
                <span>업로드 중</span>
                <span>{{ progressVal }}%</span>
              </div>
              <Progress :model-value="progressVal" />
            </div>
            <div class="space-y-2">
              <div class="flex justify-between text-sm">
                <span>저장소 사용량</span>
                <span>30%</span>
              </div>
              <Progress :model-value="30" />
            </div>
            <div class="space-y-2">
              <div class="flex justify-between text-sm">
                <span>프로젝트 완성도</span>
                <span>90%</span>
              </div>
              <Progress :model-value="90" />
            </div>
            <div class="flex gap-2">
              <Button size="sm" variant="outline" @click="progressVal = Math.max(0, progressVal - 10)">-10</Button>
              <Button size="sm" variant="outline" @click="progressVal = Math.min(100, progressVal + 10)">+10</Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator />

      <!-- ─── Skeleton ─── -->
      <section>
        <SectionHeader eyebrow="shadcn-vue" title="Skeleton" description="로딩 상태를 표현하는 스켈레톤 컴포넌트" />
        <Card class="mt-8">
          <CardContent class="pt-6 space-y-6">
            <div class="flex gap-2 mb-4">
              <Button size="sm" variant="outline" @click="skeletonVisible = !skeletonVisible">
                {{ skeletonVisible ? '실제 콘텐츠 보기' : '스켈레톤 보기' }}
              </Button>
            </div>
            <div v-if="skeletonVisible" class="space-y-4">
              <div class="flex items-center gap-4">
                <Skeleton class="size-12 rounded-full" />
                <div class="space-y-2 flex-1">
                  <Skeleton class="h-4 w-1/3" />
                  <Skeleton class="h-3 w-1/2" />
                </div>
              </div>
              <Skeleton class="h-4 w-full" />
              <Skeleton class="h-4 w-4/5" />
              <Skeleton class="h-4 w-3/5" />
              <Skeleton class="h-32 w-full rounded-lg" />
            </div>
            <div v-else class="space-y-4">
              <div class="flex items-center gap-4">
                <div class="flex size-12 items-center justify-center rounded-full bg-primary/10">
                  <span class="text-lg font-bold text-primary">김</span>
                </div>
                <div>
                  <p class="font-medium">김민준</p>
                  <p class="text-sm text-muted-foreground">Frontend Developer</p>
                </div>
              </div>
              <p class="text-sm text-muted-foreground leading-relaxed">
                스켈레톤 UI는 콘텐츠가 로드되는 동안 사용자에게 레이아웃을 미리 보여줍니다.
                사용자 경험을 개선하고 로딩 불안감을 줄여줍니다.
              </p>
              <div class="h-32 rounded-lg bg-muted flex items-center justify-center text-sm text-muted-foreground">
                이미지 영역
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator />

      <!-- ─── Tabs ─── -->
      <section>
        <SectionHeader eyebrow="shadcn-vue" title="Tabs" description="탭 기반 콘텐츠 전환 컴포넌트" />
        <Card class="mt-8">
          <CardContent class="pt-6">
            <Tabs default-value="overview">
              <TabsList>
                <TabsTrigger value="overview">개요</TabsTrigger>
                <TabsTrigger value="analytics">분석</TabsTrigger>
                <TabsTrigger value="settings">설정</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" class="mt-4 space-y-3">
                <p class="text-sm text-muted-foreground">프로젝트의 전체적인 현황을 확인합니다.</p>
                <div class="grid grid-cols-3 gap-3">
                  <div class="rounded-lg border p-3 text-center">
                    <p class="text-2xl font-bold text-primary">128</p>
                    <p class="text-xs text-muted-foreground mt-1">커밋</p>
                  </div>
                  <div class="rounded-lg border p-3 text-center">
                    <p class="text-2xl font-bold text-primary">24</p>
                    <p class="text-xs text-muted-foreground mt-1">PR</p>
                  </div>
                  <div class="rounded-lg border p-3 text-center">
                    <p class="text-2xl font-bold text-primary">8</p>
                    <p class="text-xs text-muted-foreground mt-1">이슈</p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="analytics" class="mt-4">
                <p class="text-sm text-muted-foreground">상세 분석 데이터를 확인합니다.</p>
                <div class="mt-4 h-32 rounded-lg bg-muted/50 flex items-center justify-center text-sm text-muted-foreground">
                  차트 영역
                </div>
              </TabsContent>
              <TabsContent value="settings" class="mt-4 space-y-3">
                <p class="text-sm text-muted-foreground">프로젝트 설정을 관리합니다.</p>
                <div class="space-y-2">
                  <Input placeholder="프로젝트 이름" />
                  <Button size="sm">저장</Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </section>

      <Separator />

      <!-- ─── Table (shadcn-vue) ─── -->
      <section>
        <SectionHeader
          eyebrow="shadcn-vue"
          title="Table"
          description="정적 데이터 표시에 최적화된 shadcn-vue Table 컴포넌트"
        />
        <Card class="mt-8">
          <CardContent class="pt-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>이름</TableHead>
                  <TableHead>이메일</TableHead>
                  <TableHead>역할</TableHead>
                  <TableHead>상태</TableHead>
                  <TableHead class="text-right">액션</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow v-for="row in sampleRows" :key="row.email">
                  <TableCell class="font-medium">{{ row.name }}</TableCell>
                  <TableCell class="text-muted-foreground">{{ row.email }}</TableCell>
                  <TableCell><Badge variant="outline">{{ row.role }}</Badge></TableCell>
                  <TableCell>
                    <Badge :variant="row.status === 'active' ? 'default' : 'secondary'">
                      {{ row.status === 'active' ? '활성' : '비활성' }}
                    </Badge>
                  </TableCell>
                  <TableCell class="text-right">
                    <Button variant="ghost" size="icon-sm">
                      <Edit2 class="size-3.5" />
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>

      <Separator />

      <!-- ─── QTable (Quasar) ─── -->
      <section>
        <SectionHeader
          eyebrow="Quasar"
          title="QTable"
          description="정렬, 필터, 페이지네이션이 내장된 Quasar QTable — 대용량 데이터에 적합"
        />
        <div class="mt-8 rounded-xl border bg-card">
          <q-table
            :rows="sampleRows"
            :columns="quasarColumns"
            row-key="email"
            flat
            bordered
            :rows-per-page-options="[5, 10]"
          >
            <template #body-cell-status="props">
              <q-td :props="props">
                <Badge :variant="props.row.status === 'active' ? 'default' : 'secondary'">
                  {{ props.row.status === 'active' ? '활성' : '비활성' }}
                </Badge>
              </q-td>
            </template>
          </q-table>
        </div>
      </section>

      <Separator />

      <!-- ─── Quasar Notify ─── -->
      <section>
        <SectionHeader
          eyebrow="Quasar"
          title="Notify"
          description="Quasar의 $q.notify()를 사용한 토스트 알림 — 위치, 색상, 아이콘 커스터마이징 가능"
        />
        <Card class="mt-8">
          <CardContent class="pt-6">
            <div class="flex flex-wrap gap-3">
              <Button @click="showNotify('success')" class="bg-green-600 hover:bg-green-700">
                <CheckCircle2 class="mr-2 size-4" />
                성공 알림
              </Button>
              <Button variant="outline" class="border-yellow-500 text-yellow-600 hover:bg-yellow-50 dark:hover:bg-yellow-900/20" @click="showNotify('warning')">
                <AlertCircle class="mr-2 size-4" />
                경고 알림
              </Button>
              <Button variant="destructive" @click="showNotify('error')">
                <AlertCircle class="mr-2 size-4" />
                오류 알림
              </Button>
              <Button variant="secondary" @click="showNotify('info')">
                <Info class="mr-2 size-4" />
                정보 알림
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator />

      <!-- ─── QSkeleton (Quasar) ─── -->
      <section>
        <SectionHeader
          eyebrow="Quasar"
          title="QSkeleton"
          description="Quasar의 q-skeleton — text, circle, rect 등 다양한 타입 지원"
        />
        <Card class="mt-8">
          <CardContent class="pt-6">
            <div class="grid gap-6 sm:grid-cols-2">
              <div class="space-y-3">
                <p class="text-xs font-medium text-muted-foreground uppercase tracking-wider">텍스트 타입</p>
                <q-skeleton type="text" width="80%" />
                <q-skeleton type="text" width="60%" />
                <q-skeleton type="text" width="90%" />
              </div>
              <div class="space-y-3">
                <p class="text-xs font-medium text-muted-foreground uppercase tracking-wider">기타 타입</p>
                <div class="flex items-center gap-3">
                  <q-skeleton type="QAvatar" size="40px" />
                  <div class="flex-1 space-y-1.5">
                    <q-skeleton type="text" />
                    <q-skeleton type="text" width="70%" />
                  </div>
                </div>
                <q-skeleton type="rect" height="80px" />
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator />

      <!-- ─── QBanner (Quasar) ─── -->
      <section>
        <SectionHeader
          eyebrow="Quasar"
          title="QBanner"
          description="중요한 메시지를 전달하는 Quasar Banner 컴포넌트"
        />
        <div class="mt-8 space-y-4">
          <q-banner class="bg-primary text-primary-foreground rounded-xl" rounded>
            <template #avatar>
              <Info class="size-5" />
            </template>
            새로운 버전이 출시되었습니다. 지금 업데이트하세요.
            <template #action>
              <q-btn flat color="white" label="업데이트" />
              <q-btn flat color="white" label="나중에" />
            </template>
          </q-banner>

          <q-banner class="bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200 rounded-xl" rounded>
            <template #avatar>
              <CheckCircle2 class="size-5" />
            </template>
            배포가 성공적으로 완료되었습니다.
          </q-banner>

          <q-banner class="bg-yellow-50 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200 rounded-xl" rounded>
            <template #avatar>
              <AlertCircle class="size-5" />
            </template>
            스토리지 용량이 80%를 초과했습니다. 용량을 늘려주세요.
            <template #action>
              <q-btn flat color="warning" label="업그레이드" />
            </template>
          </q-banner>
        </div>
      </section>

      <Separator />

      <!-- ─── Card ─── -->
      <section>
        <SectionHeader eyebrow="shadcn-vue" title="Card" description="콘텐츠를 그룹화하는 카드 컴포넌트" />
        <div class="mt-8 grid gap-6 sm:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>기본 카드</CardTitle>
              <CardDescription>가장 기본적인 카드 형태입니다.</CardDescription>
            </CardHeader>
            <CardContent>
              <p class="text-sm text-muted-foreground">카드 본문 영역입니다. 다양한 콘텐츠를 담을 수 있습니다.</p>
            </CardContent>
          </Card>

          <Card class="border-primary">
            <CardHeader>
              <div class="flex items-center justify-between">
                <CardTitle>강조 카드</CardTitle>
                <Badge>인기</Badge>
              </div>
              <CardDescription>테두리를 강조한 카드입니다.</CardDescription>
            </CardHeader>
            <CardContent>
              <p class="text-sm text-muted-foreground">특별한 콘텐츠를 강조할 때 사용합니다.</p>
            </CardContent>
          </Card>

          <Card class="bg-primary text-primary-foreground">
            <CardHeader>
              <CardTitle class="text-primary-foreground">색상 카드</CardTitle>
              <CardDescription class="text-primary-foreground/80">배경색이 있는 카드입니다.</CardDescription>
            </CardHeader>
            <CardContent>
              <p class="text-sm text-primary-foreground/80">브랜드 컬러를 활용한 카드 스타일입니다.</p>
            </CardContent>
          </Card>
        </div>
      </section>

    </div>
  </div>
</template>
