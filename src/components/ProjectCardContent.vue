<script setup lang="ts">
import type { ProjectBuilder } from '@/projects'

defineProps<{
  project: ProjectBuilder
}>()
</script>

<template>
  <div class="project-card__content">
    <div class="project-card__details">
      <h3 class="project-card__title">
        {{ project.title }}
      </h3>

      <p class="project-card__description">
        {{ project.description }}
      </p>
    </div>

    <div class="project-card__action">
      <a
        v-if="project.primaryBtn"
        :href="project.primaryBtn.disabled ? undefined : project.primaryBtn.href"
        target="_blank"
        :class="{
          primary: !project.primaryBtn.disabled,
          disabled: project.primaryBtn.disabled,
        }"
        @click="project.primaryBtn.disabled && $event.preventDefault()"
      >
        {{ project.primaryBtn.label ?? 'Visit' }}
      </a>

      <a
        v-if="project.secondaryBtn"
        :href="project.secondaryBtn.disabled ? undefined : project.secondaryBtn.href"
        target="_blank"
        :class="{
          secondary: !project.secondaryBtn.disabled,
          disabled: project.secondaryBtn.disabled,
        }"
        @click="project.secondaryBtn.disabled && $event.preventDefault()"
      >
        {{ project.secondaryBtn.label }}
      </a>
    </div>
  </div>
</template>

<style lang="css" scoped>
.project-card__content {
  display: flex;
  flex-direction: column;
  min-height: 200px;
  max-height: 200px;
}

.project-card__details {
  padding-bottom: 4rem;
}

.project-card__title {
  margin: 0;
  font-size: 1.5rem;

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

.project-card__action {
  position: absolute;
  width: 50%;
  right: 1.5rem;
  bottom: 1.5rem;

  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
}

.project-card__action a {
  background: rgba(255, 255, 255, 0.08);
  padding: 16px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  width: 50%;

  text-decoration: none;
  text-align: center;

  font-family: var(--font-bold);

  cursor: pointer;
}

.project-card__action .disabled,
.project-card__action .disabled:hover {
  background: transparent;

  cursor: not-allowed;
}

.project-card__action a:hover {
  background: rgba(255, 255, 255, 0.1);
}

@media (max-width: 640px) {
  .project-card__details {
    padding-bottom: 0;
  }
  .project-card__action {
    position: relative;
    width: auto;
    right: 0;
    bottom: 0;

    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .project-card__action a {
    border-radius: 0;
    width: 100%;
  }
}
</style>
