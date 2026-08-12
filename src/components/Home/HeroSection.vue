<template>
  <div class="hero-section-container receipt-edge-bottom">
    <div class="hero-section" id="hero-section">
      <h1>A lil bit about me</h1>

      <p>
        My name is Dave, known as <span class="quote">abcdave</span>, and I'm a passionate developer
        with a strong focus on JavaScript, Go, and C/C++. Over the years, I have honed my expertise
        in web development, game development, game modding, and design. <br /><br />
      </p>

      <div class="navigation">
        <router-link to="/" class="current"> Home </router-link>
        <router-link to="/project"> Project </router-link>
        <router-link to="/art"> Art </router-link>
        <router-link to="/#fiverr-cta"> $Order$ </router-link>
      </div>
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

.hero-section .navigation {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

.hero-section .navigation a {
  text-decoration: none;
  font-family: var(--font-bold);
  color: #000;
  font-size: xx-large;
}

.hero-section .navigation a:hover,
.hero-section .navigation .current {
  text-decoration: line-through;
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

@media (max-width: 375px) {
  .hero-section .navigation {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    flex-flow: row wrap;
    display: flex;
    justify-content: space-around;
  }

  .hero-section .navigation a {
    flex: 0 1 25%;
  }
}
</style>
