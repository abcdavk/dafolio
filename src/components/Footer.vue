<template>
  <footer class="site-footer receipt-edge-top">
    <div class="footer-container">
      <div class="title">
        <span class="dots"></span>
        <span class="text">< FOOTER ></span>
        <span class="dots"></span>
      </div>
      <div class="footer-grid footer-top">
        <div class="footer-headline">
          <span>> LANGUAGES & FRAMEWORKS</span>
          <h4>Frequently use or at least have studied.</h4>
        </div>
        <div class="footer-content">
          <div class="footer-techstack">
            <ul>
              <li>
                JS/TS
                <span class="dots"></span>
                <v-icon name="vi-file-type-js-official" class="icon" />
              </li>
              <li>
                C/C++
                <span class="dots"></span>
                <v-icon name="vi-file-type-cpp3" class="icon" />
              </li>
              <li>
                C#
                <span class="dots"></span>
                <v-icon name="vi-file-type-csharp2" class="icon" />
              </li>
              <li>
                Go
                <span class="dots"></span>
                <v-icon name="vi-file-type-go-lightblue" class="icon" />
              </li>
              <li v-if="isMobile">
                Java
                <span class="dots"></span>
                <v-icon name="vi-file-type-java" class="icon" />
              </li>
              <li v-if="isMobile">
                Rust
                <span class="dots"></span>
                <v-icon name="vi-file-type-rust" class="icon" />
              </li>
              <li v-if="isMobile">
                React
                <span class="dots"></span>
                <v-icon name="vi-file-type-reactjs" class="icon" />
              </li>
              <li v-if="isMobile">
                Vue
                <span class="dots"></span>
                <v-icon name="vi-file-type-vue" class="icon" />
              </li>
            </ul>
          </div>
          <div class="footer-techstack" v-if="!isMobile">
            <ul>
              <li>
                Java
                <span class="dots"></span>
                <v-icon name="vi-file-type-java" class="icon" />
              </li>
              <li>
                Rust
                <span class="dots"></span>
                <v-icon name="vi-file-type-rust" class="icon" />
              </li>
              <li>
                React
                <span class="dots"></span>
                <v-icon name="vi-file-type-reactjs" class="icon" />
              </li>
              <li>
                Vue
                <span class="dots"></span>
                <v-icon name="vi-file-type-vue" class="icon" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-grid">
        <div class="footer-headline">
          <span>> NAVIGATION</span>
          <h4>In case you need it.</h4>
        </div>
        <div class="footer-content">
          <div class="footer-links">
            <h4>Explore</h4>
            <router-link to="/">Home <span class="dots"></span></router-link>
            <router-link to="/project">Projects <span class="dots"></span></router-link>
            <router-link to="/blog">Blog <span class="dots"></span></router-link>
            <router-link to="/art">Art <span class="dots"></span></router-link>
          </div>

          <div class="footer-social">
            <h4>Connect<span class="dots"></span></h4>
            <a href="https://github.com/abcdavk/" target="_blank" rel="noopener noreferrer"
              >GitHub<span class="dots"></span
            ></a>
            <a
              href="https://www.fiverr.com/sellers/dave_64/"
              target="_blank"
              rel="noopener noreferrer"
              >Fiverr<span class="dots"></span
            ></a>
            <a href="mailto:abcdavk@proton.me">Email<span class="dots"></span></a>
          </div>
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

import { useIsMobile } from '@/composables/useIsMobile'
const { isMobile } = useIsMobile()
</script>

<style scoped>
.dots {
  flex: 1; /* Tells this span to grow and fill empty space */
  border-bottom: 2px dotted rgba(0, 0, 0, 0.12); /* Creates the dot leader */
  margin: 5px 0; /* Adds a small gap around the text */
}
.site-footer {
  width: 100%;
  height: 0 auto;
  background-color: #f8f8f6;
  /* border-top: 1px solid rgba(0, 0, 0, 0.12); */
  padding: 2rem 1rem 1.25rem;
  margin-top: 80px;
  color: #000;
}

.footer-container {
  width: min(100%, 1100px);
  margin: 0 auto;
}

.footer-container .title {
  display: flex;
  color: rgba(0, 0, 0, 0.2);
  font-family: var(--font-mono);
}

.footer-container .title .text {
  line-height: 50%;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 8px;
  margin-bottom: 1.5rem;
}

.footer-content {
  grid-column: span 2 / span 2;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 6px;
}

.footer-top {
  padding-top: 32px;
}

.footer-headline h4 {
  margin-top: 0;
  margin-bottom: 0;
  font-family: var(--font-bold);
  font-size: 1.5em;
  letter-spacing: 0.02em;
  text-align: left;
}

.footer-headline span {
  font-size: 0.8rem;
  font-family: var(--font-mono);
  color: #2f2f2f;
}

.footer-techstack {
  font-size: 0.95rem;
  font-family: var(--font-mono);
}

.footer-techstack ul {
  list-style-type: none;
  padding: 0;
}

.footer-techstack li {
  display: flex;
  filter: saturate(0%) hue-rotate(1deg) brightness(70%) contrast(110%);
}

.footer-techstack li:hover {
  display: flex;
  filter: saturate(100%) hue-rotate(1deg) brightness(100%) contrast(100%);
  background-color: rgba(0, 0, 0, 0.12);
}

.footer-techstack .icon {
  margin: 2px 6px 0 0;
}

.footer-links h4,
.footer-social h4 {
  margin: 0 0 0.75rem;
  font-family: var(--font-bold);
  font-size: 1.35rem;
  letter-spacing: 0.04em;
  text-align: left;
}

.footer-links a,
.footer-social a,
.footer-bottom {
  font-family: var(--font-mono);
  font-size: 0.95rem;
  color: #000;
  display: flex;
  /* text-align: center; */
}

.footer-mail {
  text-decoration: none;
  font-weight: 700;
  font-family: var(--font-mono);
}

.footer-links,
.footer-social {
  display: flex;
  flex-direction: column;
}

.footer-links a,
.footer-social a {
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-links a:hover,
.footer-social a:hover,
.footer-mail:hover {
  background-color: rgba(0, 0, 0, 0.12);
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding-top: 1rem;
  border-top: 2px dotted rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }

  .footer-content {
    grid-column: auto;
    grid-template-columns: 1fr;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 0.35rem;
  }
}
</style>
