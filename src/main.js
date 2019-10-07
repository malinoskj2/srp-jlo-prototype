import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Vue Atlas
import { VaApp } from 'vue-atlas/src/App'
import { VaTopbar } from 'vue-atlas/src/Topbar'

import 'vue-atlas/dist/vue-atlas.css'

Vue.use(VaApp)
Vue.use(VaTopbar)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
