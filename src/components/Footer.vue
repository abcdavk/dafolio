<template>
  <footer class="site-footer">
    <div class="footer-container">
      <div class="footer-grid">
        <div class="footer-links">
          <h4>Explore</h4>
          <router-link to="/">Home</router-link>
          <router-link to="/project">Projects</router-link>
          <router-link to="/blog">Blog</router-link>
          <router-link to="/art">Art</router-link>
        </div>

        <div class="footer-social">
          <h4>Connect</h4>
          <a href="https://github.com/abcdavk/" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a
            href="https://www.fiverr.com/sellers/dave_64/"
            target="_blank"
            rel="noopener noreferrer"
            >Fiverr</a
          >
          <a href="mailto:abcdavk@proton.me">Email</a>
        </div>
      </div>

      <div class="footer-bottom">
        <span>© {{ currentYear }} abcdave</span>
        <span>Built with Vue.</span>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.site-footer {
  width: 100%;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.03));
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  padding: 2rem 1rem 1.25rem;
  margin-top: 80px;
}

.footer-container {
  width: min(100%, 1100px);
  margin: 0 auto;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 1.5rem;
}

.footer-links h4,
.footer-social h4 {
  margin: 0 0 0.75rem;
  font-family: 'Jersey 10', sans-serif;
  font-size: 1.35rem;
  letter-spacing: 0.04em;
}

.footer-links a,
.footer-social a,
.footer-bottom {
  font-family: 'Space Mono', monospace;
  font-size: 0.95rem;
  text-align: center;
}

.footer-mail {
  color: #fff;
  text-decoration: none;
  font-weight: 700;
  font-family: 'Space Mono', monospace;
}

.footer-links,
.footer-social {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-links a,
.footer-social a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-links a:hover,
.footer-social a:hover,
.footer-mail:hover {
  color: #ffd166;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.7);
}
</style>
