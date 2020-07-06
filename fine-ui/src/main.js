import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/iconfont/iconfont.css'


import Button from './components/Button.vue'
import Dialog from './components/Dialog.vue'
import Card from './components/Card.vue'
Vue.component(Button.name, Button)
Vue.component(Dialog.name, Dialog)
Vue.component(Card.name, Card)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
