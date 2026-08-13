<script setup lang="ts">
import { projects } from '@/projects'
import ProjectCard from '@/components/ProjectCard.vue'
</script>

<template>
  <div class="center">
    <h1>Projects</h1>
  </div>
  <div class="project-container">
    <div class="project">
      <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>
  </div>
</template>

<style>
.project-container {
  padding-bottom: 5rem;
  display: flex;
  justify-content: center;
}

.project {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  width: min(1000px, 100%);
}

@media (max-width: 900px) {
  .project {
    display: flex;
    flex-direction: column;
    width: auto;
  }
}
</style>
