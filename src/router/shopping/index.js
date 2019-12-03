import Vue from 'vue'
import Router from 'vue-router'
import Login from '../../pages/shopping/Login.vue'
import ProductList from '../../pages/shopping/ProductList.vue'
import ProductDetail from '../../pages/shopping/ProductDetail.vue'
import Cart from '../../pages/shopping/Cart.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/list',
      name: 'productList',
      component: ProductList
    },
    {
      path: '/detail',
      name: 'productDetail',
      component: ProductDetail
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    }
  ]
})
