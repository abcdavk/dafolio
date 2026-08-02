import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/Home.vue'
import Blog from '@/Blog.vue'
import NotFound from '@/NotFound.vue'
import Art from '@/Art.vue'
import Project from '@/Project.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/blog', component: Blog },
  { path: '/project', component: Project },
  { path: '/art', component: Art },
  { path: '/:pathMatch(.*)*', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }

    return { top: 0, behavior: 'smooth' }
  },
})

export default router
