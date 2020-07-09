import Vue from 'vue'
import VueRouter from 'vue-router'
// import Chat from '../views/Chat.vue'
import NotFound from '../views/404.vue'

import BlankLayout from '@/layouts/Blank.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    name: '404',
    layout: BlankLayout,
    component: NotFound,
  },
  {
    path: '/',
    name: 'Home',
    // component: Home,
    component: (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "home" */ '../views/index.vue'),
  },
  // {
  //   path: '/login',
  //   name: 'Login',
  //   layout: BlankLayout,
  //   component: (): Promise<typeof import('*.vue')> => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
