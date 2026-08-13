<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal'
import { Image } from '@unpic/vue'

defineProps<{
  src: string
}>()
</script>

<template>
  <VueFinalModal class="modal" :overlay-transition="'vfm-fade'" :content-transition="'vfm-fade'">
    <Image class="modal__image" :src="src" />

    <slot />
  </VueFinalModal>
</template>

<style>
.modal {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  padding: 1rem;
}

.modal__image {
  display: block;

  width: auto;
  height: auto;

  max-width: min(60vw, 1200px);
  max-height: 60vh;

  object-fit: contain;
}

@media (max-width: 768px) {
  .modal {
    padding: 0.75rem;
  }

  .modal__image {
    max-width: 80vw;
    max-height: 70vh;
  }
}
</style>
