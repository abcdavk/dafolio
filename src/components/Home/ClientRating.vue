<template>
  <div class="rating-container">
    <span class="rating__number">4.9/5.0</span>
    <h3 class="rating__title">Rating</h3>
    <p class="rating__description">
      Service quality proven by a 4.9/5 rating from international customers.
    </p>
  </div>
</template>
<style>
.rating-container {
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  text-align: center;
}

.rating__number {
  font-family: 'Jersey 10', sans-serif;
  font-size: clamp(4rem, 10vw, 7rem);
  line-height: 1;
  color: #1aff94;

  text-shadow:
    0 0 16px rgba(26, 255, 148, 0.2),
    0 0 32px rgba(26, 255, 148, 0.35);

  animation: text-pulse 2.5s ease-in-out infinite;
}

.rating__title {
  margin: 0;
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  color: var(--text-color);
}

.rating__description {
  max-width: 480px;
  margin: 0.5rem 0 0;
  color: #aaa;
  font-size: clamp(0.95rem, 1.5vw, 1.1rem);
}
</style>
