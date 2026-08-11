<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import { VueLenis, useLenis } from 'lenis/vue'
import { watch } from 'vue'

const lenisOptions = {}

const lenis = useLenis()

watch(lenis, (lenis) => {})
</script>

<template>
  <VueLenis root :options="lenisOptions" />
  <Navbar />
  <main class="app-main">
    <RouterView />
  </main>
  <Footer />
</template>

<style scoped>
header {
  line-height: 1.5;
}

.app-main {
  /* margin-top: 6rem; */
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
