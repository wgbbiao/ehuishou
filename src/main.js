// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
const FastClick = require('fastclick')
FastClick.attach(document.body)
import VueRouter from 'vue-router'
import axios from 'axios'
Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.use(axios)
Vue.prototype.$http = axios
  /* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
