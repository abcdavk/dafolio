<script setup lang="ts">
import type { ProjectBuilder } from '../projects/index'
import ProjectCardContent from './ProjectCardContent.vue'

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

      <ProjectCardContent :project="project" />
    </div>

    <div v-else-if="project.iconSrc" class="project-card project-card--icon">
      <div class="project-card__icon-wrapper">
        <img :src="project.iconSrc" :alt="`${project.title} icon`" class="project-card__icon-img" />
      </div>

      <ProjectCardContent :project="project" />
    </div>

    <div v-else class="project-card project-card--minimal">
      <ProjectCardContent :project="project" />
    </div>
  </div>
</template>

<style>
.project-card-container {
  padding: 12px;
  max-width: 520px;
}

.project-card {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);

  transition:
    transform 0.2s ease,
    background-color 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease;
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
  max-height: 185px;
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

@media (max-width: 640px) {
  .project-card-container {
    padding: 12px;
  }
  .project-card {
    border-radius: 0;
  }
}
</style>
