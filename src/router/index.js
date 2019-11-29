import Vue from 'vue'
import VueRouter from 'vue-router'
import Marketplace from './../views/Marketplace.vue'
import Application from './../views/Application.vue'
import MockCustomFields from '../views/MockCustomFields.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/apps'
  },
  {
    path: '/apps',
    name: 'marketplace',
    component: Marketplace
  },
  {
    path: '/apps/edit/:appId/:objectId?',
    name: 'application',
    component: Application
  },
  {
    path: '/mock',
    name: 'mock',
    component: MockCustomFields
  }
]

const router = new VueRouter({
  routes
})

export default router
