import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/iconfont/iconfont.css'

import FineButton from './components/Button.vue'
import Dialog from './components/Dialog.vue'
Vue.component(FineButton.name, FineButton)
Vue.component(Dialog.name, Dialog)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
