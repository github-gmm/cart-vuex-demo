const state = {
  cartList: []
}

const getters = {
  getTotalPrice: state => {
    let totalPrice = 0
    state.cartList.forEach((res) => {
      console.log(res)
      totalPrice += Number(res.num) * Number(res.price)
    })
    return totalPrice
  },
  getTotalNum: state => {
    let totalNum = 0
    state.cartList.forEach((res) => {
      console.log(res)
      totalNum += Number(res.num)
    })
    return totalNum
  }
}

const actions = {
  addProduct ({commit}, productName) {
    commit('addProduct', productName)
  },
  reduceProduct ({commit}, productName) {
    commit('reduceProduct', productName)
  },
  deleteProduct ({commit}, productName) {
    commit('deleteProduct', productName)
  },
  clearCartList ({commit}) {
    commit('clearCartList')
  }
}

const mutations = {
  addProduct (state, productName) {
    console.log(productName)
    let item = state.cartList.find(res => res.productName === productName)
    console.log(item)
    item.num += 1
  },
  reduceProduct (state, productName) {
    let item = state.cartList.find(res => res.productName === productName)
    console.log(item)
    if (item.num > 1) {
      item.num -= 1
    } else {
      state.cartList.splice(state.cartList.indexOf(item), 1)
    }
  },
  deleteProduct (state, productName) {
    let item = state.cartList.find(res => res.productName === productName)
    state.cartList.splice(state.cartList.indexOf(item), 1)
  },
  clearCartList (state) {
    state.cartList = []
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
