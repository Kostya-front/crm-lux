import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../pages/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/categories',
    name: 'categories',
    component: () => import('../pages/CategoryView.vue')
  },
  {
    path: '/advantages',
    name: 'advantages',
    component: () => import('../pages/AdvantageView.vue')
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('../pages/ContactsView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
