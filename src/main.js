import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Vue Atlas
//import { VaApp } from 'vue-atlas/src/App'
//import { VaTopbar } from 'vue-atlas/src/Topbar'
//import { VaButton } from 'vue-atlas/src/Button'

import Va from 'vue-atlas'
import 'vue-atlas/dist/vue-atlas.css'
Vue.use(Va, 'en')

//Vue.use(VaApp)
//Vue.use(VaTopbar)
//Vue.use(VaButton)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
