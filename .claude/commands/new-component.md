새 Vue 컴포넌트를 생성해줘. 입력값은 "$ARGUMENTS"야.

## 입력 형식

`{컴포넌트명} {타입}` 형식으로 받아. 예:
- `UserAvatar common`
- `HeroSection sections`
- `AppTopbar layout`

타입이 생략되면 아래 기준으로 자동 판단해:

| 타입 | 위치 | 기준 |
|------|------|------|
| `common` | `src/components/common/` | 여러 페이지에서 재사용되는 합성 컴포넌트 |
| `sections` | `src/components/sections/` | 마케팅 랜딩 페이지의 섹션 단위 블록 |
| `layout` | `src/components/layout/` | 레이아웃 구조에 쓰이는 구조 컴포넌트 |

> `ui/` 디렉토리는 shadcn-vue 프리미티브 전용이므로 여기서 생성하지 않음.

## 규칙

- `<script setup>` Composition API 사용
- Props는 `defineProps()`로 정의, 타입 명시
- 스타일은 Tailwind CSS 클래스만 사용 (별도 `<style>` 블록 없음)
- 클래스 병합이 필요하면 `cn()` 헬퍼 사용: `import { cn } from '@/lib/utils'`
- 외부에서 class를 받아야 하면 props에 `class: String` 추가 후 cn()으로 병합
- 아이콘은 `@lucide/vue` 사용
- JSDoc 주석은 props 설명에만 간단히 작성

## 생성할 파일

`src/components/{타입}/{컴포넌트명}.vue`:

```vue
<script setup>
// import

/**
 * @prop {타입} propName - 설명
 */
const props = defineProps({
  // props
})
</script>

<template>
  <!-- 컴포넌트명과 타입에 맞는 실제 구조 -->
</template>
```

컴포넌트 이름과 타입을 보고 실제로 쓸 법한 props와 template을 추론해서 채워줘.
예: `StatCard common` → label, value, trend, positive props + 카드 UI

## 완료 후

- 생성된 파일 경로
- 사용 예시 스니펫을 한 블록 출력해줘.
