<script setup lang="ts">
import PopImage from './components/PopImage.vue'
</script>

<template>
  <h1 class="header">Arts</h1>
  <div class="art-container">
    <Vue3Marquee :duration="32" :pause-on-hover="true" class="art-track">
      <PopImage src="/img/arts/photo1.png" />
      <PopImage src="/img/arts/photo2.png" />
      <PopImage src="/img/arts/profile.png" />
      <PopImage src="/img/arts/photo1.png" />
      <PopImage src="/img/arts/photo2.png" />
      <PopImage src="/img/arts/profile.png" />
      <PopImage src="/img/arts/photo1.png" />
      <PopImage src="/img/arts/photo2.png" />
      <PopImage src="/img/arts/profile.png" />
    </Vue3Marquee>
    <Vue3Marquee :duration="32" :pause-on-hover="true" direction="reverse" class="art-track">
      <PopImage src="/img/arts/photo1.png" />
      <PopImage src="/img/arts/photo2.png" />
      <PopImage src="/img/arts/profile.png" />
      <PopImage src="/img/arts/photo1.png" />
      <PopImage src="/img/arts/photo2.png" />
      <PopImage src="/img/arts/profile.png" />
      <PopImage src="/img/arts/photo1.png" />
      <PopImage src="/img/arts/photo2.png" />
      <PopImage src="/img/arts/profile.png" />
    </Vue3Marquee>
  </div>
</template>

<style scoped>
.art-container {
  min-height: 80vh;
  overflow: hidden;
}

.art-track {
  overflow: hidden;
  position: relative;
}
</style>
