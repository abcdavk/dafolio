<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal'

defineProps<{
  src: string
}>()
</script>

<template>
  <VueFinalModal class="modal" :overlay-transition="'vfm-fade'" :content-transition="'vfm-fade'">
    <img :src="src" />
    <slot />
  </VueFinalModal>
</template>

<style>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}

.modal img {
  max-width: 60vw;
}

@media (max-width: 768px) {
  .modal img {
    max-width: 80vw;
  }
}
</style>
