import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from './util/axios'

import '../public/music_iconfont/iconfont.css'



Vue.config.productionTip = false

Vue.prototype.$axios=axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
