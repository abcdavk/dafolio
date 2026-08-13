<template>
  <section class="pricing-section padding">
    <div class="pricing-section__header">
      <h2>Service Pricing</h2>
      <p>Clear options for quick fixes, polished builds, and full-featured projects.</p>
    </div>

    <div class="pricing-grid">
      <!-- Starter -->
      <article class="pricing-card enchant-glint enchant-glint-always uncommon">
        <div class="pricing-card__header">
          <h3>Starter Pack</h3>
        </div>

        <div class="pricing-card__body">
          <span class="star">
            <v-icon name="bi-star-fill" />
            <v-icon name="bi-star-fill" />
            <v-icon name="bi-star-fill" />
          </span>

          <p class="pricing-card__price">$10</p>

          <ul>
            <li><v-icon name="px-check" class="check" />Small feature or fix</li>
            <li><v-icon name="px-check" class="check" />Fast delivery</li>
            <li><v-icon name="px-check" class="check" />3 months of patch updates</li>
          </ul>
        </div>
      </article>

      <!-- Standard -->
      <article class="pricing-card pricing-card--featured enchant-glint enchant-glint-always epic">
        <div class="pricing-card__header">
          <h3>Standard Pack</h3>
        </div>

        <div class="pricing-card__body">
          <span class="star">
            <v-icon name="bi-star-fill" />
            <v-icon name="bi-star-fill" />
            <v-icon name="bi-star-fill" />
            <v-icon name="bi-star-fill" />
          </span>

          <p class="pricing-card__price">$25</p>

          <ul>
            <li><v-icon name="px-check" class="check" />Everything in Starter</li>
            <li><v-icon name="px-check" class="check" />Polished final result</li>
            <li><v-icon name="px-check" class="check" />6 months of patch updates</li>
          </ul>
        </div>
      </article>

      <!-- Super -->
      <article class="pricing-card enchant-glint enchant-glint-always legend">
        <div class="pricing-card__header">
          <h3>Super Pack</h3>
        </div>

        <div class="pricing-card__body">
          <span class="star">
            <v-icon name="fa-crown" />
            <v-icon name="fa-crown" />
            <v-icon name="fa-crown" />
            <v-icon name="fa-crown" />
            <v-icon name="fa-crown" />
          </span>

          <p class="pricing-card__price">$50–$100</p>

          <ul>
            <li><v-icon name="px-check" class="check" />Everything in Standard</li>
            <li><v-icon name="px-check" class="check" />Advanced custom work</li>
            <li><v-icon name="px-check" class="check" />Complex feature delivery</li>
            <li><v-icon name="px-check" class="check" />Lifetime patch updates</li>
          </ul>
        </div>
      </article>
    </div>
  </section>
</template>

<style>
.pricing-section {
  width: min(100%, 1100px);
  margin: 0 auto 80px;
}

.pricing-section__header {
  margin-bottom: 2rem;
  text-align: center;
}

.pricing-section__header p {
  margin: 0.5rem auto 0;
  max-width: 640px;
  color: var(--text-color);
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
  align-items: stretch;
}

.pricing-card {
  display: flex;
  flex-direction: column;

  padding: 1.75rem;

  border-radius: 12px;

  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.16);

  cursor: pointer;
}

.pricing-card__header h3 {
  margin: 0;
  font-size: 1.7rem;
}

.pricing-card__body {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
}

.star {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.35rem;

  min-height: 28px;
  font-size: 1.15rem;
}

.pricing-card__price {
  margin: 0;

  text-align: center;

  font-family: var(--font-bold);
  font-size: 2.6rem;
  line-height: 1;
}

.pricing-card ul {
  margin: 0;
  padding: 0;
  list-style: none;

  display: flex;
  flex-direction: column;
  gap: 0.55rem;

  color: var(--text-color);
}

.pricing-card li {
  display: flex;
  align-items: flex-start;
  gap: 0.7rem;
  line-height: 1.6;
}

.pricing-card .check {
  margin-top: 0.25rem;
  flex-shrink: 0;
}

.uncommon .pricing-card__price,
.uncommon .star,
.uncommon .check {
  color: #fff67d;
}

.epic .pricing-card__price,
.epic .star,
.epic .check {
  color: #9d7dff;
}

.legend .pricing-card__price,
.legend .star,
.legend .check {
  color: #ff2121;
}

@media (max-width: 900px) {
  .pricing-grid {
    grid-template-columns: 1fr;
  }

  .pricing-card--featured {
    transform: none;
  }

  .pricing-card__header {
    min-height: auto;
  }
}
</style>
