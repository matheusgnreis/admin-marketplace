import Vue from 'vue'
import VueRouter from 'vue-router'
import Applications from '../views/Applications'
import Application from '../views/Applications/Application'

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
    path: '/apps/edit/:slug?',
    name: 'application',
    component: Application
  }

]

const router = new VueRouter({
  routes
})

export default router
