import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import can from './helpers/can'
Vue.config.productionTip = false

Vue.prototype.$can=can

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
