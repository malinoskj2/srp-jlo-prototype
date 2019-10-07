import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Vue Atlas
import { VaApp } from 'vue-atlas/src/App'
import 'vue-atlas/dist/vue-atlas.css'

Vue.use(VaApp)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
