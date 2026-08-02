<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
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
  padding-top: 5.5rem;
}

@media (max-width: 768px) {
  .app-main {
    padding-top: 4.5rem;
  }
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
