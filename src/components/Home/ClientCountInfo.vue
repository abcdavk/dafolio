<template>
  <div class="client-info-container padding">
    <div class="client-info">
      <span class="client-info__number">50+</span>
      <h3 class="client-info__title">Clients Served</h3>
      <p class="client-info__description">
        Trusted by creators worldwide to build Minecraft Bedrock addons, web applications, and
        custom solutions.
      </p>
    </div>
  </div>
</template>

<style>
.client-info-container {
  width: min(100%, 800px);
  margin: 0 auto;
}

.client-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  padding-top: 3rem 2rem;

  text-align: center;
}

.client-info__number {
  font-family: 'Jersey 10', sans-serif;
  font-size: clamp(4rem, 10vw, 7rem);
  line-height: 1;
  color: #1aff94;

  text-shadow:
    0 0 16px rgba(26, 255, 148, 0.2),
    0 0 32px rgba(26, 255, 148, 0.35);

  animation: text-pulse 2.5s ease-in-out infinite;
}

.client-info__title {
  margin: 0;
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  color: var(--text-color);
}

.client-info__description {
  max-width: 480px;
  margin: 0.5rem 0 0;
  color: #aaa;
  font-size: clamp(0.95rem, 1.5vw, 1.1rem);
}
</style>
