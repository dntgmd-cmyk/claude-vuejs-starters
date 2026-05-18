<script setup>
import { ref } from 'vue'
import { Save } from '@lucide/vue'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import PageHeader from '@/components/common/PageHeader.vue'

const profile = ref({
  name: '홍길동',
  email: 'hong@example.com',
  company: '테크 스타트업',
})

const notifications = ref({
  emailUpdates: true,
  securityAlerts: true,
  marketing: false,
  weeklyReport: true,
})

const appearance = ref({
  compactMode: false,
  showAvatars: true,
})

const notificationItems = [
  { key: 'emailUpdates', label: '이메일 업데이트', description: '제품 업데이트 및 새 기능 알림' },
  { key: 'securityAlerts', label: '보안 알림', description: '로그인, 비밀번호 변경 등 보안 이벤트' },
  { key: 'marketing', label: '마케팅 이메일', description: '특별 할인 및 프로모션 정보' },
  { key: 'weeklyReport', label: '주간 리포트', description: '매주 월요일 활동 요약 이메일' },
]
</script>

<template>
  <div class="space-y-6">
    <PageHeader
      title="Settings"
      description="계정과 알림 설정을 관리하세요."
      :breadcrumbs="[{ label: 'Dashboard', href: '/dashboard' }, { label: 'Settings' }]"
    />

    <Tabs default-value="profile" class="space-y-6">
      <TabsList>
        <TabsTrigger value="profile">프로필</TabsTrigger>
        <TabsTrigger value="notifications">알림</TabsTrigger>
        <TabsTrigger value="appearance">화면</TabsTrigger>
        <TabsTrigger value="security">보안</TabsTrigger>
      </TabsList>

      <TabsContent value="profile">
        <Card>
          <CardHeader>
            <CardTitle>프로필 정보</CardTitle>
            <CardDescription>공개 프로필 정보를 수정하세요.</CardDescription>
          </CardHeader>
          <CardContent class="space-y-4">
            <div class="grid gap-4 sm:grid-cols-2">
              <div class="space-y-2">
                <label for="settings-name" class="text-sm font-medium">이름</label>
                <Input id="settings-name" v-model="profile.name" />
              </div>
              <div class="space-y-2">
                <label for="settings-company" class="text-sm font-medium">회사</label>
                <Input id="settings-company" v-model="profile.company" />
              </div>
            </div>
            <div class="space-y-2">
              <label for="settings-email" class="text-sm font-medium">이메일</label>
              <Input id="settings-email" v-model="profile.email" type="email" />
            </div>
            <Separator />
            <div class="flex justify-end">
              <Button>
                <Save class="mr-2 size-4" />
                저장
              </Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="notifications">
        <Card>
          <CardHeader>
            <CardTitle>알림 설정</CardTitle>
            <CardDescription>수신할 알림 유형을 선택하세요.</CardDescription>
          </CardHeader>
          <CardContent class="space-y-6">
            <div
              v-for="item in notificationItems"
              :key="item.key"
              class="flex items-center justify-between"
            >
              <div>
                <p class="text-sm font-medium">{{ item.label }}</p>
                <p class="text-xs text-muted-foreground">{{ item.description }}</p>
              </div>
              <Switch
                :checked="notifications[item.key]"
                @update:checked="(v) => (notifications[item.key] = v)"
              />
            </div>
            <Separator />
            <div class="flex justify-end">
              <Button><Save class="mr-2 size-4" />저장</Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="appearance">
        <Card>
          <CardHeader>
            <CardTitle>화면 설정</CardTitle>
            <CardDescription>인터페이스 표시 방식을 설정하세요.</CardDescription>
          </CardHeader>
          <CardContent class="space-y-6">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm font-medium">컴팩트 모드</p>
                <p class="text-xs text-muted-foreground">더 많은 정보를 한 화면에 표시합니다.</p>
              </div>
              <Switch v-model:checked="appearance.compactMode" />
            </div>
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm font-medium">아바타 표시</p>
                <p class="text-xs text-muted-foreground">목록에서 사용자 아바타를 표시합니다.</p>
              </div>
              <Switch v-model:checked="appearance.showAvatars" />
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="security">
        <Card>
          <CardHeader>
            <CardTitle>보안 설정</CardTitle>
            <CardDescription>계정 보안을 강화하세요.</CardDescription>
          </CardHeader>
          <CardContent class="space-y-4">
            <div class="space-y-2">
              <label for="settings-current-pw" class="text-sm font-medium">현재 비밀번호</label>
              <Input id="settings-current-pw" type="password" placeholder="현재 비밀번호 입력" />
            </div>
            <div class="space-y-2">
              <label for="settings-new-pw" class="text-sm font-medium">새 비밀번호</label>
              <Input id="settings-new-pw" type="password" placeholder="새 비밀번호 입력" />
            </div>
            <div class="space-y-2">
              <label for="settings-confirm-pw" class="text-sm font-medium">새 비밀번호 확인</label>
              <Input id="settings-confirm-pw" type="password" placeholder="새 비밀번호 다시 입력" />
            </div>
            <Separator />
            <div class="flex justify-end">
              <Button>비밀번호 변경</Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  </div>
</template>
