import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/apps'
  },
  {
    path: '/apps',
    name: 'applications',
    component: () => import('../views/Applications.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
