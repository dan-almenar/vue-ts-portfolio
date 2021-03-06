import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/Home.vue'
import Admin from '@/views/admin/Admin.vue'
import AdminCreateProject from '@/views/admin/AdminCreateProject.vue'
import AdminComments from '@/views/admin/AdminComments.vue'
import Projects from '@/views/Projects.vue'
import LangsAndTools from '@/views/LangsAndTools.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "contact" */ '../views/contact/Contact.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/admin/comments',
    name: 'AdminComments',
    component: AdminComments
  },
  {
    path: '/admin/create-project',
    name: 'AdminCreateProject',
    component: AdminCreateProject
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/langs-and-tools',
    name: 'LangsAndTools',
    component: LangsAndTools
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
