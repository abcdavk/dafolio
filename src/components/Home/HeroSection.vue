<template>
  <div class="hero-section-container receipt-edge-bottom">
    <div class="hero-section" id="hero-section">
      <h1>A lil bit about me</h1>

      <p>
        <!-- <img src="/img/profile.png" alt="Dave" class="hero-image" /> -->

        My name is Dave, known as <span class="quote">abcdave</span>, and I'm a passionate developer
        with a strong focus on JavaScript, Go, and C/C++. Over the years, I have honed my expertise
        in web development, game development, game modding, and design. <br /><br />
      </p>
    </div>
  </div>
</template>

<style>
.hero-section-container {
  background-color: #1aff94;
  display: flex;
  justify-content: center;
  padding-bottom: 64px;
}

.hero-section {
  width: min(100%, 800px);
  margin: 0 auto;
  color: #000;
}

.hero-section p {
  text-align: justify;
  text-justify: inter-word;
}

.hero-image {
  float: right;

  width: 220px;
  max-width: 40%;

  margin-left: 1.5rem;
  margin-bottom: 1rem;

  /* border-radius: 16px; */

  shape-margin: 1rem;
}

@media (max-width: 847px) {
  .hero-section {
    padding: 0.85rem 1.5rem;
  }
}
</style>
