<script setup lang="ts">
import type { ProjectBuilder } from '../projects/index'

defineProps<{
  project: ProjectBuilder
}>()
</script>

<template>
  <div class="project-card">
    <!-- Banner (prioritas tertinggi) -->
    <div v-if="project.bannerSrc" class="project-card__media project-card__banner">
      <img :src="project.bannerSrc" :alt="`${project.title} banner`" />
    </div>

    <!-- Icon (jika tidak ada banner) -->
    <div v-else-if="project.iconSrc" class="project-card__media project-card__icon">
      <img :src="project.iconSrc" :alt="`${project.title} icon`" />
    </div>

    <!-- Content -->
    <div class="project-card__content">
      <h3 class="project-card__title">{{ project.title }}</h3>
      <p class="project-card__description">{{ project.description }}</p>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 280px;
  min-height: 380px;
  padding: 1.5rem;
  margin: 0.5rem;

  position: relative;
  overflow: hidden;

  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  backdrop-filter: blur(10px);

  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    background-color 0.2s ease;
}

.project-card:hover {
  transform: translateY(-8px);
  background: rgba(255, 255, 255, 0.15);
  border: solid 1px rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

/* Media Container */
.project-card__media {
  width: 100%;
  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
  border-radius: 6px;
  overflow: hidden;
}

/* Banner - Persegi Panjang */
.project-card__banner {
  aspect-ratio: 16 / 9;
  height: 120px;
}

.project-card__banner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

/* Icon - Persegi */
.project-card__icon {
  aspect-ratio: 1 / 1;
  height: 100px;
  width: 100px;
  align-self: center;
}

.project-card__icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  padding: 8px;
}

/* Content */
.project-card__content {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex: 1;
}

.project-card__title {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 1.3;
  color: rgba(255, 255, 255, 0.95);

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.project-card__description {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.75);

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
