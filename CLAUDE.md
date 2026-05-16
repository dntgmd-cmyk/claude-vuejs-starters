# CLAUDE.md

Claude Code가 이 프로젝트를 작업할 때 참고하는 가이드입니다.

## 개발 명령어

```bash
npm install       # 의존성 설치
npm run dev       # 개발 서버 (기본 포트 5173)
npm run build     # 프로덕션 빌드 (vue-tsc + vite)
npm run preview   # 빌드 결과물 미리보기
npm run lint      # ESLint 실행
```

## 기술 스택 및 버전

- **Vue 3.5+** + `<script setup>` Composition API
- **Vite 6** + `@tailwindcss/vite` 플러그인
- **Tailwind CSS v4** — CSS 파일 기반 설정 (`src/assets/main.css`)
- **shadcn-vue** — Radix Vue 기반 headless UI (직접 작성 컴포넌트)
- **Quasar 2** — 복잡한 UI용 (`@quasar/vite-plugin` 자동 주입)
- **Pinia** — 전역 상태 관리
- **Vue Router 4** — 중첩 라우팅
- **TypeScript 5** — 엄격한 타입 검사

## 아키텍처 구조

### 라우트 구조

```
/                     → MarketingLayout (Header + Footer)
  /                   → HomeView (랜딩 페이지)
  /features           → FeaturesView
  /pricing            → PricingView
  /about              → AboutView
/dashboard            → DashboardLayout (Sidebar)
  /dashboard          → DashboardView
  /dashboard/analytics
  /dashboard/users    (Quasar QTable 예시)
  /dashboard/reports
  /dashboard/notifications
  /dashboard/settings
  /dashboard/help
```

### 컴포넌트 계층

```
src/
├── components/
│   ├── ui/           ← shadcn-vue 프리미티브 (직접 수정 금지)
│   ├── common/       ← 재사용 합성 컴포넌트 (PageHeader, StatCard 등)
│   ├── sections/     ← 마케팅 섹션 (HeroSection 등)
│   └── layout/       ← 구조 컴포넌트 (AppSidebar, AppHeader 등)
├── layouts/          ← Vue Router 레이아웃 래퍼
├── views/            ← 페이지 컴포넌트
│   └── dashboard/    ← 대시보드 하위 페이지
├── stores/           ← Pinia 스토어
├── router/           ← Vue Router 설정
├── lib/
│   ├── constants.ts  ← 모든 정적 데이터 (NAV_LINKS, SIDEBAR_LINKS 등)
│   └── utils.ts      ← cn() 헬퍼
└── types/            ← 공유 TypeScript 인터페이스
```

## shadcn-vue vs Quasar 사용 기준

| 상황 | 사용 컴포넌트 |
|------|-------------|
| Button, Card, Badge, Input 등 기본 UI | shadcn-vue (`src/components/ui/`) |
| 대용량 테이블 (정렬/필터/페이지네이션) | Quasar `QTable` |
| 가상 스크롤 목록 | Quasar `QVirtualScroll` |
| 토스트 알림 | Quasar `Notify` |
| 로딩 인디케이터 | Quasar `Loading`, `QSkeleton` |
| 에디터, 파일 업로드 | Quasar |

## 주요 패턴

### cn() — Tailwind 클래스 병합

```typescript
import { cn } from '@/lib/utils'
className={cn("base-class", conditional && "extra-class", props.class)}
```

### PageHeader (breadcrumb 포함)

```vue
<PageHeader
  title="페이지 제목"
  description="설명"
  :breadcrumbs="[
    { label: 'Dashboard', href: '/dashboard' },
    { label: '현재 페이지' },  // href 없으면 현재 페이지로 표시
  ]"
>
  <template #action>
    <Button>액션</Button>
  </template>
</PageHeader>
```

### 새 대시보드 페이지 추가 절차

1. `src/views/dashboard/NewView.vue` 생성
2. `src/router/index.ts` dashboard children에 라우트 추가
3. `src/lib/constants.ts` SIDEBAR_LINKS에 메뉴 항목 추가
4. `src/components/layout/SidebarNav.vue`의 `iconMap`에 아이콘 추가

### Tailwind CSS v4 테마 설정

`tailwind.config.ts` 파일 없음. 모든 설정은 `src/assets/main.css`에서:

```css
@theme inline {
  --color-primary: var(--primary);  /* CSS 변수 → Tailwind 토큰 매핑 */
}

:root {
  --primary: oklch(...);  /* 라이트 모드 값 */
}
.dark {
  --primary: oklch(...);  /* 다크 모드 값 */
}
```

### Quasar와 Tailwind CSS 공존

- `quasar/dist/quasar.css`는 전역으로 임포트하지 않음 (CSS 충돌 방지)
- `@quasar/vite-plugin`이 사용된 Quasar 컴포넌트의 CSS만 자동 주입
- Quasar CSS 변수(`--q-primary` 등)는 `main.css`의 `:root`에서 Tailwind 토큰과 동기화

### 다크 모드

`useThemeStore` (Pinia)에서 상태 관리:

```typescript
const themeStore = useThemeStore()
themeStore.toggle()       // 다크/라이트 전환
themeStore.isDark         // 현재 상태
```

`App.vue`에서 `document.documentElement.classList.toggle('dark', isDark)` 적용.
