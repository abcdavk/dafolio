<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import { VueLenis, useLenis } from 'lenis/vue'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const main = ref(null)

const lenisOptions = {}
const lenis = useLenis()
watch(lenis, (lenis) => {})

watch(
  () => route.path,
  () => {
    if (route.path !== '/') {
      main.value?.classList.add('app-padding')
      return
    }
    main.value?.classList.remove('app-padding')
  },
)
</script>

<template>
  <VueLenis root :options="lenisOptions" />
  <Navbar />
  <main class="app-main" ref="main">
    <RouterView />
  </main>
  <Footer />
</template>

<style scoped>
header {
  line-height: 1.5;
}

.app-main {
}

.app-padding {
  margin-top: 6rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
