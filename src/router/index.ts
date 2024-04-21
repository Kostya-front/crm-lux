import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../pages/HomeView.vue'
import {useCookies} from "vue3-cookies";
import {usePopupStore} from "@/features/popup/popupStore";
import { useAuthStore } from '@/features/auth/athStore';
import AuthView from '@/pages/AuthView.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/auth',
    name: 'auth',
    component: AuthView
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
  {
    path: '/login',
    name: 'login',
    component: () => import('../pages/LoginView.vue')
  },
  {
    path: '/activate/:key',
    name: 'activate',
    component: () => import('../pages/ActivationView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from) => {
  const authStore = useAuthStore()

  try {
    if(to.path === '/auth') {
      return true
  }

  const usAuth = await authStore.check()
  return true
  } catch {
    return '/auth'
  }


  // authStore.check().then((res) => {
  //   //@ts-ignore
  //   if(res.status > 300) {
  //     throw new Error('')
  //   }

  //   next()
  // }).catch(() => next('/auth'))

})




// router.beforeEach((to, from, next) => {
//   const authStore = useAuthStore()
//   console.log(to);
  
//   if(to.path === '/auth') {
//     authStore.isAuth = false
//   }
//   else {
//     authStore.isAuth = true
//   }
//   next()
// })    




















// router.beforeEach((to, from, next) => {
//   let isAuth = false
//   if(localStorage.getItem('accessToken')) {
//     isAuth = true
//   }
//
//   if(!to.matched.some(record => record.meta.requiresAuth)) {
//    return next()
//   }
//
//   if(to.path !== '/' && !isAuth) {
//     console.log(to)
//    return next({path: '/login'})
//   }
//
//   next()
// })
//
// router.beforeEach((to, from, next) => {
//   const authStore = usePopupStore()
//   authStore.isAuth = !!useCookies().cookies.get('token')
//
//   if(to.name === 'login' && authStore.isAuth) {
//    return next({path: '/'})
//   }
//
//   if(!to.matched.some(record => record.meta.requiresAuth)) {
//     next()
//   }
//
//   if(!authStore.isAuth) {
//     next({path:'/login'})
//   }
//   next()
// })
export default router
