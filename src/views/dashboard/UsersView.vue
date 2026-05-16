<script setup>
import { ref } from 'vue'
import { UserPlus } from '@lucide/vue'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import PageHeader from '@/components/common/PageHeader.vue'

const search = ref('')
const loading = ref(false)
const pagination = ref({ sortBy: 'name', descending: false, page: 1, rowsPerPage: 10, rowsNumber: 0 })

const columns = [
  { name: 'id', label: '#', field: 'id', sortable: true, align: 'left' },
  { name: 'name', label: '이름', field: 'name', sortable: true, align: 'left' },
  { name: 'email', label: '이메일', field: 'email', sortable: true, align: 'left' },
  { name: 'plan', label: '플랜', field: 'plan', sortable: true, align: 'center' },
  { name: 'status', label: '상태', field: 'status', sortable: true, align: 'center' },
  { name: 'joinedAt', label: '가입일', field: 'joinedAt', sortable: true, align: 'left' },
]

const rows = [
  { id: 1, name: '김민준', email: 'minjun@example.com', plan: 'Pro', status: 'active', joinedAt: '2024-01-15' },
  { id: 2, name: '이서연', email: 'seoyeon@example.com', plan: 'Starter', status: 'active', joinedAt: '2024-02-03' },
  { id: 3, name: '박지훈', email: 'jihun@example.com', plan: 'Enterprise', status: 'active', joinedAt: '2024-02-18' },
  { id: 4, name: '최유나', email: 'yuna@example.com', plan: 'Starter', status: 'inactive', joinedAt: '2024-03-07' },
  { id: 5, name: '정민서', email: 'minseo@example.com', plan: 'Pro', status: 'active', joinedAt: '2024-03-22' },
  { id: 6, name: '강준혁', email: 'junhyeok@example.com', plan: 'Pro', status: 'active', joinedAt: '2024-04-01' },
  { id: 7, name: '윤지아', email: 'jia@example.com', plan: 'Enterprise', status: 'active', joinedAt: '2024-04-15' },
  { id: 8, name: '임도현', email: 'dohyeon@example.com', plan: 'Starter', status: 'pending', joinedAt: '2024-05-02' },
]

const planVariant = {
  Enterprise: 'default',
  Pro: 'secondary',
  Starter: 'outline',
}

const statusColor = {
  active: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  inactive: 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400',
  pending: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
}

const statusLabel = {
  active: '활성',
  inactive: '비활성',
  pending: '대기중',
}
</script>

<template>
  <div class="space-y-6">
    <PageHeader
      title="Users"
      description="사용자 목록을 관리하세요."
      :breadcrumbs="[{ label: 'Dashboard', href: '/dashboard' }, { label: 'Users' }]"
    >
      <template #action>
        <Button size="sm">
          <UserPlus class="mr-2 size-4" />
          사용자 추가
        </Button>
      </template>
    </PageHeader>

    <div class="flex items-center gap-3">
      <Input v-model="search" placeholder="이름, 이메일 검색..." class="max-w-xs" />
    </div>

    <!--
      Quasar QTable 사용 예시
      shadcn-vue Table 대비 장점: 가상 스크롤, 서버사이드 정렬/필터/페이지네이션, 고정 헤더
      대용량 데이터(10,000행+)에 적합
    -->
    <div class="rounded-xl border bg-card">
      <q-table
        :rows="rows"
        :columns="columns"
        :filter="search"
        :loading="loading"
        v-model:pagination="pagination"
        row-key="id"
        flat
        bordered
        class="q-table--no-top-separator"
        :rows-per-page-options="[10, 25, 50]"
      >
        <template #body-cell-plan="props">
          <q-td :props="props">
            <Badge :variant="planVariant[props.row.plan] ?? 'outline'">
              {{ props.row.plan }}
            </Badge>
          </q-td>
        </template>

        <template #body-cell-status="props">
          <q-td :props="props">
            <span :class="['inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium', statusColor[props.row.status]]">
              {{ statusLabel[props.row.status] }}
            </span>
          </q-td>
        </template>

        <template #loading>
          <q-inner-loading showing color="primary" />
        </template>

        <template #no-data>
          <div class="flex h-32 items-center justify-center text-sm text-muted-foreground">
            검색 결과가 없습니다.
          </div>
        </template>
      </q-table>
    </div>
  </div>
</template>
