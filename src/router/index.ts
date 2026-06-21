import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Docs from '../views/Docs.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/docs',
      name: 'docs',
      component: Docs
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return savedPosition || { top: 0 }
  }
})

export default router
