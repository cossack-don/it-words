import Vue from 'vue'
import VueRouter from 'vue-router'
// Главная страница
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
    component: () => import(/* webpackChunkName: "about" */ '../views/pages/pageTranslateWord.vue')
  },

 
  { path: '*', 
    name: 'NotFoundPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/pages/NotFoundPage.vue')
  }
  
]

const router = new VueRouter({
  routes
})

export default router
