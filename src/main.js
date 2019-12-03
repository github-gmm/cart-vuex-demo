import Vue from 'vue'
import store from './store/index'
import App from './App'
// import router from './router'
import router from './router/shopping'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
