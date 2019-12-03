<template>
  <div class="prodcut-list">
    <div class="product-title">
      <div class="product-img" @click="back">
        <img src="../../assets/back.svg"/>
      </div>
      <div>
        <span>商品列表</span>
      </div>
      <div class="product-img" @click="goCart">
        <img src="../../assets/cart.svg"/>
      </div>
    </div>
    <div class="product-head">
      <div class="product-attr">
        <label>品牌：</label>
        <div class="product-attr-item">
          <template v-for="(item, index) in productBrands">
            <div :key="index" @click="addBrand(item)" :style="{background: item.choose ? 'red' : '', color: item.choose ? 'white' : ''}">
              <span>{{item.name}}</span>
            </div>
          </template>
        </div>
      </div>
      <div class="product-attr">
        <label>颜色：</label>
        <div class="product-attr-item">
          <template v-for="(item, index) in productColors">
            <div :key="index" @click="addColor(item)" :style="{background: item.choose ? 'red' : '', color: item.choose ? 'white' : ''}">
              <span>{{item.name}}</span>
            </div>
          </template>
        </div>
      </div>
      <div class="product-attr">
        <label>排序：</label>
        <div class="product-attr-item">
          <template v-for="(item, index) in sortList">
            <div :key="index" @click="addSort(item)" :style="{background: item.choose ? 'red' : '', color: item.choose ? 'white' : ''}">
              <span>{{item.name}}</span>
            </div>
          </template>
        </div>
      </div>
    </div>
    <div class="product-content">
      <template v-for="(item, index) in showProductList">
        <div :key="index" class="product-item" @click="goDetail(item.imgUrl, item.productName, item.price)">
          <img :src="item.imgUrl" width="128" height="128"/>
          <div>
            <span>{{item.productName}}</span>
          </div>
          <div>
            <span>销量：{{item.saleNum}}</span>
          </div>
          <div>
            <span>￥{{item.price}}</span>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  name: 'ProductList',
  data () {
    return {
      showProductList: []
    }
  },
  methods: {
    ...mapActions('product', [
      'chooseBrand',
      'chooseColor',
      'chooseSort'
    ]),
    goCart () {
      this.$router.push({
        name: 'cart'
      })
    },
    goDetail (imgUrl, name, price) {
      this.$router.push({
        name: 'productDetail',
        params: {
          detailImg: imgUrl,
          name: name,
          price: price
        }
      })
    },
    back () {
      this.$router.push({
        name: 'login'
      })
    },
    addBrand (item) {
      this.chooseBrand(item)
      this.showProductList = this.filterProductList
    },
    addColor (item) {
      this.chooseColor(item)
      this.showProductList = this.filterProductList
    },
    addSort (item) {
      this.chooseSort(item)
      this.showProductList = this.filterProductList
    }
  },
  computed: {
    ...mapState('product', [
      'productList',
      'sortList',
      'filterList'
    ]),
    ...mapGetters('product', [
      'productBrands',
      'productColors',
      'filterProductList'
    ])
  },
  created () {
    this.showProductList = JSON.parse(JSON.stringify(this.productList))
  }
  // 1、获取产品列表
}
</script>

<style lang="scss" scoped>
.prodcut-list {
  height: 100vh;
  overflow: hidden;
  .product-title {
    height: 44px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    font-weight: bold;
    border-bottom: 1px solid #eee;
    margin-bottom: 10px;
    .product-img {
      height: 44px;
      width: 10%;
      display: flex;
      justify-content: center;
    }
  }
  .product-head {
    border: 1px solid #eee;
    padding: 5px;
    margin: 10px 5px;
    .product-attr {
      height: 30px;
      display: flex;
      align-items: center;
      label {
        width: 50px;
        font-size: 16px;
      }
      .product-attr-item {
        width: 80%;
        display: flex;
        align-items: center;
        div {
          border: 1px solid #decccc;
          padding: 0 5px 0 5px;
          height: 24px;
          display: flex;
          align-items: center;
          font-size: 14px;
          margin: 0 10px 0 10px;
        }
      }
    }
  }
  .product-content {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    height: 75vh;
    overflow: scroll;
    .product-item {
      border: 1px solid #eee;
      max-height: 210px;
      width: 44%;
      margin: 5px 10px;
      img {
        margin: 5px;
        border: 1px solid #eee;
        background-color: #eee;
      }
    }
  }
}
</style>
