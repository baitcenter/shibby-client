import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '@/registerServiceWorker'
import '@/scss/style.scss'

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(VueResource)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-root')
