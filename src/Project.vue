<script setup lang="ts">
import { projects } from '@/projects'
import ProjectCard from '@/components/ProjectCard.vue'
</script>

<template>
  <div class="center">
    <h1>Project</h1>
  </div>
  <div class="project-container">
    <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
  </div>
</template>

<style>
.project-container {
  /* width: 100%; */
}
</style>
