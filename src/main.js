import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import VueResource from 'vue-resource'
import AudioVisual from 'vue-audio-visual'
import Vuebar from 'vuebar'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '@/registerServiceWorker'
import '@/scss/style.scss'

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(AudioVisual)
Vue.use(Vuebar)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-root')
