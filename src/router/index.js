import Vue from 'vue'
import VueRouter from 'vue-router'
import MainWrapper from '../views/MainWrapper.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MainWrapper',
    component: MainWrapper
  },
  {
    path: '/page-translate-word',
    name: 'pageTranslateWord',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/pages/pageTranslateWord.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
