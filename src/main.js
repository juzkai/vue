// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { AlertPlugin, ToastPlugin } from 'vux'
import App from './App'
import router from './router'
import store from './store/index'
import validator from './tools/validator'
import axios from './tools/api'

Vue.use(AlertPlugin)
Vue.use(ToastPlugin)
Vue.config.productionTip = false

Vue.prototype.validator = validator
Vue.prototype.http = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
