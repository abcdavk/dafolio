<script setup lang="ts">
import { projects, projectsMarquee } from '@/projects'
import ProjectCard from '@/components/ProjectCard.vue'
</script>

<template>
  <section>
    <h1 class="header">Projects</h1>
    <div class="project-container">
      <div class="project">
        <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
      </div>
    </div>

    <span class="decoration-arrow">>>></span>
    <div class="project-container marquee">
      <Vue3Marquee :duration="32" class="project">
        <ProjectCard v-for="project in projectsMarquee" :key="project.id" :project="project" />
      </Vue3Marquee>
    </div>
    <span class="decoration-arrow"><<<</span>
  </section>
</template>

<style scoped>
section {
  padding-bottom: 5rem;
}

.decoration-arrow {
  display: flex;
  justify-content: center;
  font-family: var(--font-bold);
  font-weight: 400;
  font-style: normal;
  font-size: 3rem;
  padding: 24px;
}

.project-container {
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
