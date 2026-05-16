export const NAV_LINKS = [
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Examples', href: '/examples' },
]

export const SIDEBAR_LINKS = [
  { label: 'Dashboard', href: '/dashboard', icon: 'layout-dashboard' },
  { label: 'Analytics', href: '/dashboard/analytics', icon: 'bar-chart-3' },
  { label: 'Users', href: '/dashboard/users', icon: 'users', badge: '12' },
  { label: 'Reports', href: '/dashboard/reports', icon: 'file-text' },
  { label: 'Notifications', href: '/dashboard/notifications', icon: 'bell', badge: '3' },
  { label: 'Settings', href: '/dashboard/settings', icon: 'settings' },
  { label: 'Help', href: '/dashboard/help', icon: 'help-circle' },
]

export const FEATURES = [
  {
    icon: 'zap',
    title: '빠른 개발 시작',
    description: '잘 정리된 폴더 구조와 컴포넌트로 바로 개발을 시작하세요.',
  },
  {
    icon: 'palette',
    title: '모던 UI 컴포넌트',
    description: 'shadcn-vue와 Quasar의 강력한 컴포넌트를 함께 사용할 수 있습니다.',
  },
  {
    icon: 'moon',
    title: '다크 모드 지원',
    description: 'Tailwind CSS와 CSS 변수 기반의 완벽한 다크 모드를 제공합니다.',
  },
  {
    icon: 'shield',
    title: '상태 관리 준비',
    description: 'Pinia 스토어 구조가 미리 설정되어 복잡한 상태 관리가 쉬워집니다.',
  },
  {
    icon: 'smartphone',
    title: '완전한 반응형',
    description: '모바일부터 데스크탑까지 모든 화면 크기에 최적화되어 있습니다.',
  },
  {
    icon: 'git-branch',
    title: 'JavaScript 기반',
    description: '별도 타입 설정 없이 바로 시작할 수 있는 순수 JavaScript 환경입니다.',
  },
]

export const STATS = [
  { label: '구성된 컴포넌트', value: '40+', description: 'shadcn-vue & Quasar' },
  { label: '예제 페이지', value: '12', description: '마케팅 + 대시보드 + 예제' },
  { label: '지원 브라우저', value: '100%', description: '모던 브라우저 전체' },
  { label: '번들 크기', value: '최소화', description: 'Tree-shaking 지원' },
]

export const TESTIMONIALS = [
  {
    name: '김민준',
    role: 'Frontend Developer',
    company: 'TechCorp',
    content: '스타터킷 덕분에 셋업 시간을 90% 줄였어요. shadcn-vue와 Quasar가 함께 동작하는 게 신기했습니다.',
  },
  {
    name: '이서연',
    role: 'Product Manager',
    company: 'StartupHub',
    content: 'Vue.js 기반 어드민 대시보드를 이렇게 빠르게 만든 건 처음이에요. 완성도가 높아서 바로 프로덕션에 사용했습니다.',
  },
  {
    name: '박지훈',
    role: 'Full Stack Developer',
    company: 'DevStudio',
    content: 'Tailwind v4와 다크 모드 통합이 매우 깔끔하게 구현되어 있습니다. 커스터마이징도 쉬웠어요.',
  },
]

export const PRICING_PLANS = [
  {
    name: 'Starter',
    price: '무료',
    description: '개인 프로젝트와 학습용',
    features: [
      '모든 기본 컴포넌트',
      '마케팅 페이지 템플릿',
      '대시보드 레이아웃',
      '커뮤니티 지원',
    ],
    cta: '무료로 시작',
  },
  {
    name: 'Pro',
    price: '₩49,000/월',
    description: '팀과 비즈니스를 위한 플랜',
    features: [
      'Starter의 모든 기능',
      '고급 컴포넌트 패키지',
      '우선 지원',
      '업데이트 우선 적용',
      '커스텀 테마',
    ],
    highlighted: true,
    cta: 'Pro 시작하기',
  },
  {
    name: 'Enterprise',
    price: '문의',
    description: '대규모 팀을 위한 맞춤 솔루션',
    features: [
      'Pro의 모든 기능',
      '전담 기술 지원',
      'SLA 보장',
      '커스텀 개발 지원',
      '온보딩 세션',
    ],
    cta: '문의하기',
  },
]

export const LOGO_ITEMS = ['Vue.js', 'Vite', 'Tailwind', 'Quasar', 'Pinia', 'JavaScript']
