
import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import product from './modules/product'
import {actions} from './actions'
import {mutations} from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cart,
    product
  },
  state: {
    token: window.sessionStorage.token ? window.sessionStorage.token : ''
  },
  actions: actions,
  mutations: mutations
})
