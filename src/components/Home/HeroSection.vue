<template>
  <div class="hero-section" id="hero-section">
    <h1>A lil bit about me</h1>

    <p>
      <img src="/img/profile.png" alt="Dave" class="hero-image" />

      Hello,
      <br />
      My name is Dave, known as <span class="quote">abcdave</span>, and I'm a passionate developer
      with a strong focus on JavaScript, Go, and C/C++. Over the years, I have honed my expertise in
      web development, game development, game modding, and design. <br /><br />
      This portfolio is a glimpse into my journey—a showcase of projects, experiences, and
      achievements that reflect my dedication and love for what I do. Whether you're here to explore
      my work, collaborate, or simply get to know me better, I'm glad you stopped by.
      <br /><br />
      Feel free to explore my featured projects, learn more about my professional background, or
      reach out if you're interested in working together. I'm always excited to connect with
      like-minded individuals and take on new challenges.
      <br /><br />
      Thank you for visiting. Let's build something amazing together!
    </p>
  </div>
</template>

<style>
.hero-section-container {
  display: flex;
  justify-content: center;
}

.hero-section {
  width: min(100%, 800px);
  margin: 0 auto;
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
