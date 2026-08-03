<template>
  <div class="cta-section-container center diagonal-frame" id="fiverr-cta">
    <div class="fiverr-cta cta-section">
      <h2>Let's Build Something Amazing</h2>

      <p>
        Looking for a developer who enjoys solving problems, building web applications, or creating
        custom Minecraft Bedrock addons? I'd love to help bring your ideas to life.
      </p>

      <div class="cta-actions">
        <a
          class="cta-button primary enchant-glint enchant-glint-always strong"
          href="https://www.fiverr.com/dave_64"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hire Me on Fiverr
        </a>

        <a class="cta-button secondary" href="mailto:abcdavk@proton.me"> Contact Me </a>
      </div>
    </div>
  </div>
</template>
<style>
.cta-section-container {
  width: min(100%, 800px);
  margin: 0 auto;
}

.diagonal-frame {
  padding: 3rem;
}

.cta-section {
  padding: 3rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  text-align: center;

  background: #202020;

  border: 1px solid rgba(229, 229, 229, 0.25);
  /* border-radius: 20px; */
  overflow: hidden;

  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
}

.cta-section h2 {
  margin: 0;
  font-size: clamp(2.4rem, 4vw, 3rem);
}

.cta-section p {
  max-width: 620px;
  margin: 0;

  color: var(--text-color);
}

.cta-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-width: 180px;

  padding: 0.85rem 1.5rem;

  /* border-radius: 12px; */

  text-decoration: none;
  font-family: 'Jersey 10', sans-serif;
  font-size: large;

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    background 0.2s ease;
}

.cta-button:hover {
  transform: translateY(-4px);
}

.cta-button.primary {
  color: #101010;
  background: #1aff94;

  box-shadow: 0 0 24px rgba(26, 255, 148, 0.25);
}

.cta-button.primary:hover {
  box-shadow: 0 0 32px rgba(26, 255, 148, 0.4);
}

.cta-button.secondary {
  color: var(--text-color);

  background: rgba(255, 255, 255, 0.08);

  outline: 1px solid rgba(255, 255, 255, 0.2);
}

.cta-button.secondary:hover {
  background: rgba(255, 255, 255, 0.14);
}
</style>
