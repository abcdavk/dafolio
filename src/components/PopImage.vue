<script setup>
import { ModalsContainer, useModal } from 'vue-final-modal'
import ModalConfirm from './ArtPopUp.vue'
const props = defineProps({
  id: String,
  src: String,
})
const { open } = useModal({
  component: ModalConfirm,
  attrs: {
    src: props.src,
  },
})
</script>

<template>
  <button class="pop-image" @click="() => open()">
    <img :src="src" />
  </button>

  <ModalsContainer />
</template>

<style>
.pop-image {
  padding: 0;
  border: transparent;
  background: transparent;
}

.pop-image img {
  margin: 0.5rem;
  max-width: 250px;

  transition: border-color 0.2s ease;
}

.pop-image img:hover {
  border: solid 2px rgba(255, 255, 255, 0.5);
}
</style>
