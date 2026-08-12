<script setup lang="ts">
import { projects } from '@/projects'
import ProjectCard from '@/components/ProjectCard.vue'
</script>

<template>
  <div class="center">
    <h1>Project</h1>
  </div>
  <div class="project-container">
    <div class="project">
      <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>
  </div>
</template>

<style>
.project-container {
  min-height: 60vh;
}

.project {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
