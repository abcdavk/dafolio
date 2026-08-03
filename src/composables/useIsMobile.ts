import { onMounted, onUnmounted, ref } from 'vue'

export function useIsMobile() {
  const isMobile = ref(false)

  const checkIfMobile = () => {
    isMobile.value = window.matchMedia('(max-width: 769px)').matches
  }

  onMounted(() => {
    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', checkIfMobile)
  })

  return {
    isMobile,
  }
}
