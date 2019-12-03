const state = {
  // initial state
  productList: [
    {productId: 1, imgUrl: require('../../assets/airpods.svg'), productName: 'Airpods', price: 1200, brand: 'Apple', color: '白色', saleNum: 100},
    {productId: 2, imgUrl: require('../../assets/iphone.svg'), productName: 'Iphone X', price: 5599, brand: 'Apple', color: '黑色', saleNum: 21},
    {productId: 3, imgUrl: require('../../assets/mi.svg'), productName: '小米手机', price: 2899, brand: '小米', color: '红色', saleNum: 40},
    {productId: 4, imgUrl: require('../../assets/video.svg'), productName: '小米摄像机', price: 199, brand: '小米', color: '白色', saleNum: 1000},
    {productId: 5, imgUrl: require('../../assets/redIphone.svg'), productName: 'Iphone X(红色)', price: 5799, brand: 'Apple', color: '红色', saleNum: 33},
    {productId: 6, imgUrl: require('../../assets/yellowIphone.svg'), productName: 'Iphone X(黄色)', price: 5799, brand: 'Apple', color: '黄色', saleNum: 20}
  ],
  sortList: [
    {name: '默认', choose: true},
    {name: '销量', choose: false, englishName: 'saleNum'},
    {name: '价格', choose: false, englishName: 'price'}
  ],
  filterList: {
    'brand': [],
    'color': [],
    'sort': ['默认']
  }
}

const getters = {
  productBrands: state => {
    let brandsList = []
    state.productList.map(res => {
      if (!brandsList.find(item => item.name === res.brand)) {
        brandsList.push({name: res.brand, choose: false})
      }
    })
    return brandsList
  },
  productColors: state => {
    let colorsList = []
    state.productList.map(res => {
      if (!colorsList.find(item => item.name === res.color)) {
        colorsList.push({name: res.color, choose: false})
      }
    })
    return colorsList
  },
  filterProductList: (state, getters) => {
    let list = JSON.parse(JSON.stringify(state.productList))
    let copyList = []
    for (let res in state.filterList) {
      let key = res
      let value = state.filterList[res]
      if (res !== 'sort') {
        for (let resItem of value) {
          list.forEach(item => {
            if (item[key] === resItem) {
              copyList.push(item)
            }
          })
        }
      } else {
        for (let resItem of value) {
          if (resItem !== '默认') {
            // 冒泡排序
            let i, j, temp
            let flag = true
            for (i = 0; i < list.length - 1 && flag; i++) {
              flag = false
              for (j = list.length - 1; j > i; j--) {
                if (list[j][resItem] < list[j - 1][resItem]) {
                  temp = list[j - 1]
                  list[j - 1] = list[j]
                  list[j] = temp
                  flag = true
                }
              }
            }
          }
        }
      }
      if (copyList.length !== 0) {
        list = JSON.parse(JSON.stringify(copyList))
        copyList = []
      }
    }
    return list
  }
}

const actions = {
  chooseBrand ({commit}, item) {
    commit('chooseBrand', item)
  },
  chooseColor ({commit}, item) {
    commit('chooseColor', item)
  },
  chooseSort ({commit}, item) {
    commit('chooseSort', item)
  },
  filterProductList ({commit}) {
    commit('filterProductList')
  }
}

const mutations = {
  chooseBrand (state, item) {
    item.choose = !item.choose
    if (item.choose) {
      state.filterList.brand.push(item.name)
    } else {
      state.filterList.brand.splice(state.filterList.brand.indexOf(item.name), 1)
    }
  },
  chooseColor (state, item) {
    item.choose = !item.choose
    if (item.choose) {
      state.filterList.color.push(item.name)
    } else {
      state.filterList.color.splice(state.filterList.color.indexOf(item.name), 1)
    }
  },
  chooseSort (state, item) {
    item.choose = !item.choose
    if (item.choose) {
      state.filterList.sort.push(item.englishName)
    } else {
      state.filterList.sort.splice(state.filterList.sort.indexOf(item.englishName), 1)
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
