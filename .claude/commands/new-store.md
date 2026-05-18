새 Pinia 스토어를 생성해줘. 스토어 이름은 "$ARGUMENTS"야.

## 규칙

- 파일명: `src/stores/{camelCase}.js`
- 스토어 id: camelCase (예: userProfile)
- export 함수명: `use{PascalCase}Store` (예: useUserProfileStore)
- 기존 `src/stores/theme.js` 스타일을 따를 것 (Composition API 방식)
- JSDoc 주석은 핵심 함수에만 한 줄로 작성

## 생성할 파일

`src/stores/{camelCase}.js`:

```js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const use{PascalCase}Store = defineStore('{camelCase}', () => {
  // state (ref)
  // ...

  // getters (computed)
  // ...

  // actions (함수)
  // ...

  return { /* 공개할 state, getters, actions */ }
})
```

스토어 이름 "$ARGUMENTS"에 맞는 실제 state/getters/actions를 적절히 추론해서 채워줘.
예를 들어 "cart"라면 items, totalPrice, addItem, removeItem, clearCart 등.

## 완료 후

- 생성된 파일 경로
- export 함수명
- 포함된 state/getters/actions 목록을 간단히 출력해줘.
