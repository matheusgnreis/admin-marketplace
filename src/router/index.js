import Vue from 'vue'
import VueRouter from 'vue-router'
import Marketplace from './../views/Marketplace.vue'
import Application from './../views/Application.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/market'
  },
  {
    path: '/market',
    name: 'marketplace',
    component: Marketplace
  },
  {
    path: '/market/edit/:appId/:objectId?',
    name: 'application',
    component: Application
  }
]

const router = new VueRouter({
  routes
})

export default router
