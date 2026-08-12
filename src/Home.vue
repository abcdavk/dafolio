<script setup>
import { defineAsyncComponent, ref, onMounted, onUnmounted } from 'vue'
import ClientCountInfo from './components/Home/ClientCountInfo.vue'
import ClientRating from './components/Home/ClientRating.vue'
// import ClientReviews from './components/Home/ClientReviews.vue'
import FiverrCTA from './components/Home/FiverrCTA.vue'
import HeroSection from './components/Home/HeroSection.vue'
import PricingSection from './components/Home/PricingSection.vue'

const Reviews = defineAsyncComponent(() => import('./components/Home/ClientReviews.vue'))

const section = ref(null)
const visible = ref(false)

let observer

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        visible.value = true
        observer.disconnect()
      }
    },
    {
      rootMargin: '1000px',
    },
  )

  observer.observe(section.value)
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<template>
  <div>
    <HeroSection />

    <h2>What I've done</h2>
    <ClientCountInfo />
    <ClientRating />
    <section ref="section">
      <Reviews v-if="visible" />
    </section>
    <PricingSection />
    <FiverrCTA />
  </div>
</template>
