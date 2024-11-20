import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OpionionView from '@/views/OpionionView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import AdmView from '@/views/AdmView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/adm',
    name: 'adm',
    component: AdmView
  },
  {
    path: '/opinion',
    props: true,
    name: 'opinion',
    component: OpionionView
  },

  {
    path: '*',
    name: 'notFound',
    component: NotFoundView
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
