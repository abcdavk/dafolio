import { ref, onMounted, onUnmounted, type Ref } from 'vue'

interface CountUpOptions {
  from?: number
  to: number
  duration?: number
  threshold?: number
}

export function useCountUp(
  element: Ref<HTMLElement | null>,
  { from = 0, to, duration = 1000, threshold = 0.5 }: CountUpOptions,
) {
  const value = ref(from)

  let observer: IntersectionObserver | null = null
  let animationFrame: number | null = null

  const start = () => {
    const startTime = performance.now()

    const animate = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1)

      value.value = Math.floor(from + (to - from) * progress)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      } else {
        value.value = to
        animationFrame = null
      }
    }

    animationFrame = requestAnimationFrame(animate)
  }

  onMounted(() => {
    observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return
        if (!entry.isIntersecting) return

        start()
        observer?.disconnect()
      },
      {
        threshold,
      },
    )

    if (element.value) {
      observer.observe(element.value)
    }
  })

  onUnmounted(() => {
    observer?.disconnect()

    if (animationFrame !== null) {
      cancelAnimationFrame(animationFrame)
    }
  })

  return {
    value,
  }
}
