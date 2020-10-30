import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/students',
    name: 'Students',
    component: () => import('../views/Students/Students.vue')
  },
  {
    path: '/students/register',
    name: 'StudentForm',
    component: () => import('../views/Students/StudentForm.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
