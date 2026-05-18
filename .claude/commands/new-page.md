새 대시보드 페이지를 아래 4단계로 추가해줘. 페이지 이름은 "$ARGUMENTS"야.

## 규칙

- 파일명/라우트는 kebab-case (예: my-page)
- View 컴포넌트명은 PascalCase + View (예: MyPageView)
- 스토어명/라우트 name은 camelCase (예: myPage)
- 아이콘은 lucide-vue에서 적절한 것을 선택
- 기존 DashboardView.vue 스타일 그대로 따를 것

## 1단계 — View 파일 생성

`src/views/dashboard/{PascalCase}View.vue` 를 생성해.

아래 구조를 따라야 해:

```vue
<script setup>
import PageHeader from '@/components/common/PageHeader.vue'
// 필요한 컴포넌트 import

</script>

<template>
  <div class="space-y-8">
    <PageHeader
      title="{페이지 제목}"
      description="{간단한 설명}"
      :breadcrumbs="[
        { label: 'Dashboard', href: '/dashboard' },
        { label: '{페이지 제목}' },
      ]"
    />

    <!-- 페이지 본문 (Card 1~2개로 기본 구조 잡기) -->
  </div>
</template>
```

## 2단계 — 라우터 등록

`src/router/index.js`의 dashboard children 배열에 추가:

```js
{ path: '{kebab-case}', name: '{camelCase}', component: () => import('@/views/dashboard/{PascalCase}View.vue') },
```

기존 라우트 목록 마지막에 추가할 것.

## 3단계 — 사이드바 링크 추가

`src/lib/constants.js`의 SIDEBAR_LINKS 배열에 추가:

```js
{ label: '{페이지 제목}', href: '/dashboard/{kebab-case}', icon: '{lucide-icon-kebab-case}' },
```

Help 항목 바로 위에 추가할 것.

## 4단계 — iconMap 등록

`src/components/layout/SidebarNav.vue`에서:
1. 상단 import에 해당 Lucide 아이콘 추가
2. `iconMap` 객체에 `'{icon-name}': IconComponent` 항목 추가

## 완료 후

변경된 파일 4개를 목록으로 알려줘.
