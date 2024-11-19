import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
    },
    {
      path: '/productes',
      name: 'productes',
      component: () => import('../views/ProductesView.vue'),
    },
    {
      path: '/productDetail/:id',
      name: 'producte',
      component: () => import('../views/ProductDetailView.vue'),

    },
  ],
})

export default router
