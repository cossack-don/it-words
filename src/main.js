import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// Мои стили SCSS
import "./scss/index.scss";
//* Мои стили SCSS

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
