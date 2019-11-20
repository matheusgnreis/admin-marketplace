import Vue from 'vue'
import VueRouter from 'vue-router'
import Applications from '../views/Applications.vue'
import Application from '../views/Application.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/apps'
  },
  {
    path: '/apps/:category?',
    name: 'applications',
    component: Applications
  },
  {
    path: '/edit/:appId/:appObjectId?',
    name: 'application',
    component: Application
  }
]

const router = new VueRouter({
  routes
})

export default router
