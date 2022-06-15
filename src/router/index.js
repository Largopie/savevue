import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/',
    name: 'todo',
    component: () => import('../views/ToDo.vue')
  },
  {
    path: '/cal',
    name: 'cal',
    component: () => import('../views/CalEx.vue')
  },
  {
    path: '/today',
    name: 'today',
    component: () => import('../views/TodayEx.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
