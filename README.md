# Vue.js Starter Kit

Vue 3 + Vite + Tailwind CSS v4 + shadcn-vue + Quasar 기반의 프로덕션 레디 스타터킷입니다.

## 기술 스택

| 기술 | 버전 | 역할 |
|------|------|------|
| Vue 3 | 3.5+ | 프레임워크 |
| Vite | 6.x | 빌드 도구 |
| Tailwind CSS | v4 | 스타일링 |
| shadcn-vue | Latest | 기본 UI 컴포넌트 |
| Quasar | 2.x | 복잡한 UI 컴포넌트 |
| Pinia | 2.x | 상태 관리 |
| Vue Router | 4.x | 라우팅 |
| TypeScript | 5.x | 타입 안전성 |

## 시작하기

```bash
npm install
npm run dev
```

## 프로젝트 구조

```
src/
├── assets/main.css       # Tailwind v4 + CSS 변수 설정
├── components/
│   ├── ui/               # shadcn-vue 컴포넌트
│   ├── common/           # 공통 합성 컴포넌트
│   ├── sections/         # 마케팅 섹션
│   └── layout/           # 레이아웃 컴포넌트
├── layouts/              # 마케팅/대시보드 레이아웃
├── views/                # 페이지 뷰
│   └── dashboard/        # 대시보드 페이지
├── router/               # Vue Router 설정
├── stores/               # Pinia 스토어
├── lib/
│   ├── constants.ts      # 정적 데이터
│   └── utils.ts          # 유틸리티 (cn 등)
└── types/                # TypeScript 타입
```

## 예제 페이지

### 마케팅
- `/` — 랜딩 페이지 (Hero, Features, Stats, Testimonials, CTA)
- `/features` — 기능 소개
- `/pricing` — 요금제
- `/about` — 소개

### 대시보드
- `/dashboard` — 메인 대시보드 (통계, 활동 테이블)
- `/dashboard/analytics` — 분석 (탭, 진행 바, 차트 영역)
- `/dashboard/users` — 사용자 목록 **(Quasar QTable 예시)**
- `/dashboard/reports` — 보고서 목록
- `/dashboard/notifications` — 알림 관리
- `/dashboard/settings` — 설정 (탭, Switch, Input)
- `/dashboard/help` — 도움말 & FAQ

## shadcn-vue vs Quasar

- **shadcn-vue** → Button, Card, Badge, Input, Table, Tabs, Switch, Progress 등 기본 UI
- **Quasar** → QTable (대용량 데이터), QVirtualScroll, Notify, Loading 등 복잡한 기능

## 명령어

```bash
npm run dev      # 개발 서버 (localhost:5173)
npm run build    # 프로덕션 빌드
npm run preview  # 빌드 미리보기
npm run lint     # ESLint
```
