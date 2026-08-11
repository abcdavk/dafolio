<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useIsMobile } from '@/composables/useIsMobile'

const route = useRoute()
const isMenuOpen = ref(false)
const header = ref(null)

const { isMobile } = useIsMobile()

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
  isMenuOpen.value ? header.value.classList.add('opened') : header.value.classList.remove('opened')
}

function closeMenu() {
  isMenuOpen.value = false
  header.value.classList.remove('opened')
}

function handleScroll() {
  header.value?.classList.toggle('scrolled', window.scrollY > 350)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header ref="header" id="navbar">
    <nav>
      <a href="/#" class="logo font-bold">Dafolio</a>

      <div class="navigation-container">
        <button
          class="nav-toggle"
          aria-label="Toggle navigation"
          :aria-expanded="isMenuOpen"
          @click="toggleMenu"
        >
          <svg
            class="nav-toggle-icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div class="navigation font-bold" :class="{ open: isMenuOpen }">
          <router-link to="/" :class="{ current: route.path === '/' }" @click="closeMenu">
            Home
          </router-link>

          <router-link to="/blog" :class="{ current: route.path === '/blog' }" @click="closeMenu">
            Blog
          </router-link>

          <router-link
            to="/project"
            :class="{ current: route.path === '/project' }"
            @click="closeMenu"
          >
            Project
          </router-link>

          <router-link to="/art" :class="{ current: route.path === '/art' }" @click="closeMenu">
            Art
          </router-link>

          <router-link
            to="/#fiverr-cta"
            @click="closeMenu"
            v-if="isMobile"
            class="shop-button enchant-glint enchant-glint-always"
          >
            Buy
          </router-link>
        </div>
        <router-link
          to="/#fiverr-cta"
          @click="closeMenu"
          class="shop-button enchant-glint enchant-glint-always"
          v-if="!isMobile"
          ><v-icon name="px-shopping-bag" class="shop-icon" />
        </router-link>
      </div>
    </nav>
    <div class="nav-overlay" :class="{ visible: isMenuOpen }" @click="closeMenu"></div>
  </header>
</template>

<style>
header {
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1100;

  backdrop-filter: blur(32px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

#navbar {
  background: #101010;
  transition: background 1s;
}

#navbar.scrolled {
  background: rgba(16, 16, 16, 0.85);
}

header.opened {
  height: 100%;
}
nav {
  width: min(100%, 800px);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0.85rem 1.5rem;

  transition:
    background 250ms ease,
    border-color 250ms ease,
    box-shadow 250ms ease;
}

nav .logo {
  text-decoration: none;
  font-size: 3rem;
  font-weight: 400;

  background: linear-gradient(90deg, #ff0000, #ff8000, #ffff00, #ff8000, #ff0000);

  background-size: 800% 100%;
  color: transparent;
  -webkit-background-clip: text;

  animation: rgb-gradient 60s linear infinite;
}

.navigation-container {
  display: flex;
  align-items: center;
  gap: 32px;
}

nav .shop-button {
  padding: 32px;
  background-color: rgba(255, 255, 255, 0.02);
  border: solid 1px rgba(255, 255, 255, 0.08);
  color: var(--text-color);
  cursor: pointer;
}

nav .shop-icon {
  scale: 150%;
  transition: all 0.2s;
}

nav .shop-icon:hover {
  scale: 200%;
}

/* Desktop */
@media (min-width: 769px) {
  .nav-toggle {
    display: none;
  }

  nav .navigation {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: xx-large;
  }

  nav .navigation a {
    color: var(--text-color);
    text-decoration: none;
    transition: 0.3s;
  }

  nav .navigation a:hover,
  nav .navigation .current {
    background: linear-gradient(90deg, #00ff4c, #00ffdd, #6200ff, #00ffdd, #00ff4c);

    background-size: 800% 100%;
    color: transparent;
    -webkit-background-clip: text;

    animation: rgb-gradient 60s linear infinite;
  }

  nav .navigation .current {
    text-decoration: line-through;
  }
}

/* Mobile: hamburger menu */
@media (max-width: 768px) {
  nav .logo {
    margin-left: 24px;
  }
  nav {
    padding: 0.85rem 1rem;
  }

  nav .shop-button {
    padding: 8px;
  }

  .nav-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px;
    background: transparent;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    color: var(--text-color);
    z-index: 1001;
  }

  .nav-toggle-icon {
    width: 24px;
    height: 24px;
    stroke: currentColor;
    transition:
      transform 0.3s ease,
      opacity 0.3s ease;
  }

  .nav-toggle[aria-expanded='true'] .nav-toggle-icon {
    transform: rotate(90deg);
  }

  .nav-overlay {
    position: fixed;
    inset: 0;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition:
      opacity 0.3s ease,
      visibility 0.3s ease;
    z-index: 999;
  }

  .nav-overlay.visible {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }

  nav .navigation {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: min(320px, 85vw);
    max-width: 320px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    gap: 1.5rem;
    padding: 5.5rem 1.5rem 2rem;
    font-size: 1.95rem;
    background: rgba(16, 16, 16, 0.98);
    backdrop-filter: blur(12px);
    border-left: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: -20px 0 40px rgba(0, 0, 0, 0.35);
    transform: translateX(100%);
    opacity: 0;
    visibility: hidden;
    transition:
      transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
      opacity 0.35s ease,
      visibility 0.35s ease;
    z-index: 1000;
    overflow-y: auto;
  }

  nav .navigation.open {
    transform: translateX(0);
    opacity: 1;
    visibility: visible;
  }

  nav .navigation a {
    color: var(--text-color);
    text-decoration: none;
    transition:
      color 0.2s ease,
      transform 0.2s ease;
  }

  nav .navigation a:hover,
  nav .navigation .current {
    background: linear-gradient(90deg, #00ff4c, #00ffdd, #6200ff, #00ffdd, #00ff4c);
    background-size: 800% 100%;
    color: transparent;
    -webkit-background-clip: text;
    animation: rgb-gradient 60s linear infinite;
  }

  nav .navigation .current {
    text-decoration: line-through;
  }
}

/* Smaller mobile screens */
@media (max-width: 480px) {
  nav .navigation {
    width: 100%;
    font-size: 1.75rem;
    padding: 5.5rem 1rem 2rem;
  }
}
</style>
