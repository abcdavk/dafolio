<script setup lang="ts">
import { projects, projectsMarquee } from '@/projects'
import ProjectCard from '@/components/ProjectCard.vue'
</script>

<template>
  <h1>Projects</h1>
  <div class="project-container">
    <div class="project">
      <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>
  </div>

  <h2>More</h2>
  <div class="project-container marquee">
    <Vue3Marquee :duration="32" class="project">
      <ProjectCard v-for="project in projectsMarquee" :key="project.id" :project="project" />
    </Vue3Marquee>
  </div>
</template>

<style>
.project-container {
  display: flex;
  justify-content: center;
}

.project-container .marquee {
  padding-bottom: 5rem;
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
