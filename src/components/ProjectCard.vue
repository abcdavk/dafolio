<script setup lang="ts">
import type { ProjectBuilder } from '../projects/index'

defineProps<{
  project: ProjectBuilder
}>()
</script>

<template>
  <div class="project-card-container">
    <div v-if="project.bannerSrc" class="project-card project-card--banner">
      <div class="project-card__banner-wrapper">
        <img
          :src="project.bannerSrc"
          :alt="`${project.title} banner`"
          class="project-card__banner-img"
        />
      </div>

      <div class="project-card__content">
        <h3 class="project-card__title">{{ project.title }}</h3>
        <p class="project-card__description">{{ project.description }}</p>
      </div>
    </div>

    <div v-else-if="project.iconSrc" class="project-card project-card--icon">
      <div class="project-card__icon-wrapper">
        <img :src="project.iconSrc" :alt="`${project.title} icon`" class="project-card__icon-img" />
      </div>

      <div class="project-card__content">
        <h3 class="project-card__title">{{ project.title }}</h3>
        <p class="project-card__description">{{ project.description }}</p>
      </div>
    </div>

    <div v-else class="project-card project-card--minimal">
      <div class="project-card__content">
        <h3 class="project-card__title">{{ project.title }}</h3>
        <p class="project-card__description">{{ project.description }}</p>
      </div>
    </div>
  </div>
</template>

<style>
.project-card-container {
  padding: 12px;
}

.project-card {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);

  transition:
    transform 0.2s ease,
    background-color 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

.project-card--banner {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 520px;
}

.project-card__banner-wrapper {
  overflow: hidden;
  background: rgba(0, 0, 0, 0.2);
}

.project-card__banner-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.project-card--banner .project-card__content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.project-card--icon {
  display: flex;
  flex-direction: row;
  gap: 1.25rem;
  padding: 1.5rem;
  align-items: flex-start;
  width: 100%;
  max-width: 600px;
}

.project-card__icon-wrapper {
  flex-shrink: 0;
  width: 140px;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-card__icon-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.project-card--icon .project-card__content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding-top: 0.25rem;
}

.project-card--minimal {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 400px;
}

.project-card--minimal .project-card__content {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.project-card__content {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.project-card__title {
  margin: 0;
  font-size: 1.5rem;
  /* line-height: 1.3; */

  text-align: left;

  color: rgba(255, 255, 255, 0.95);

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-word;
}

.project-card__description {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.7);

  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@media (max-width: 640px) {
  .project-card-container {
    padding: 12px;
  }
  .project-card {
    border-radius: 0;
  }
}
</style>
