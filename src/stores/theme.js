import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import { usePreferredDark } from '@vueuse/core'

export const useThemeStore = defineStore('theme', () => {
  const prefersDark = usePreferredDark()
  const isDark = ref(prefersDark.value)

  // OS 다크모드 설정 변경 시 자동 동기화
  watch(prefersDark, (val) => { isDark.value = val })

  /** 다크/라이트 모드 전환 */
  function toggle() {
    isDark.value = !isDark.value
  }

  function setDark(value) {
    isDark.value = value
  }

  return { isDark, toggle, setDark }
})
