import { defineStore } from 'pinia'
import { ref } from 'vue'
import { usePreferredDark } from '@vueuse/core'

export const useThemeStore = defineStore('theme', () => {
  const prefersDark = usePreferredDark()
  const isDark = ref(prefersDark.value)

  /** 다크/라이트 모드 전환 */
  function toggle() {
    isDark.value = !isDark.value
  }

  function setDark(value) {
    isDark.value = value
  }

  return { isDark, toggle, setDark }
})
