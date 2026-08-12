<script setup>
defineProps({
  id: String,
  username: String,
  region: String,
  stars: Number,
  comment: String,
  price: String,
  duration: String,
})
</script>

<template>
  <div class="review-card">
    <div class="review-card__header">
      <div>
        <h3 class="review-card__username">{{ username }}</h3>
        <p class="review-card__region">{{ region }}</p>
      </div>

      <div class="review-card__stars">
        <span v-for="i in 5" :key="i" class="review-card__star enchant-glint enchant-glint-always">
          <v-icon :name="i <= stars ? 'bi-star-fill' : 'bi-star'" />
        </span>
      </div>
    </div>

    <p class="review-card__comment">{{ comment }}</p>

    <div class="review-card__footer">
      <span>{{ price }}</span>
      <span>•</span>
      <span>{{ duration }}</span>
    </div>
  </div>
</template>

<style>
.review-card {
  padding: 1.5rem;
  margin: 0.5rem;

  position: relative;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  flex: 0 0 300px;
  min-height: 360px;
  max-height: 380px;

  background: rgba(255, 255, 255, 0.1);
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.review-card:hover {
  transform: translateY(-12px);
  border: solid 2px rgba(255, 255, 255, 0.5);
}

.review-card__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;

  flex-shrink: 0;
}

.review-card__star {
  font-size: 1.1rem;
  color: #f5c542;
  border-radius: 4px;
}

.review-card__username {
  margin: 0;
  text-align: left;
  font-size: 1.4rem;
}

.review-card__region {
  margin: 0.25rem 0 0;
  color: #888;
  font-size: 0.9rem;
}

.review-card__stars {
  display: flex;
  gap: 0.15rem;

  font-size: 1.15rem;
  color: #d0d0d0;

  flex-shrink: 0;
}

.review-card__stars .filled {
  color: #ffb400;
  border-radius: 4px;
}

.review-card__comment {
  flex: 1;
  min-height: 0;

  margin: 0;

  color: var(--text-color);
  line-height: 1.7;
  font-size: 1rem;

  overflow-y: auto;
  overflow-x: hidden;

  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.25) transparent;
}

.review-card__comment::-webkit-scrollbar {
  width: 6px;
}

.review-card__comment::-webkit-scrollbar-track {
  background: transparent;
}

.review-card__comment::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.25);
  border-radius: 999px;
}

.review-card__comment::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.45);
}

.review-card__footer {
  display: flex;
  align-items: center;
  gap: 0.75rem;

  margin-top: auto;

  font-family: var(--font-bold);
  font-size: 1.4rem;
  color: var(--text-color);

  flex-shrink: 0;
}
</style>
