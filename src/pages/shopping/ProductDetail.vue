<template>
  <div class="product-detail">
    <div class="product-title">
      <div class="product-img" @click="back">
        <img src="../../assets/back.svg"/>
      </div>
      <div>
        <span>商品详细信息</span>
      </div>
      <div class="product-img" @click="goCart">
        <img src="../../assets/cart.svg"/>
      </div>
    </div>
    <div class="product-content">
      <div class="product-img">
        <img :src="detailImg"  width="300" height="300"/>
      </div>
      <div class="product-text">
        <div>
          <span>{{productName}}</span>
        </div>
        <div>
          <span>￥{{price}}</span>
        </div>
      </div>
    </div>
    <div class="add-car">
      <div>
        <span @click="addCart">加入购物车</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'ProductDetail',
  data () {
    return {
      detailImg: '',
      productName: '',
      price: 0
    }
  },
  methods: {
    goCart () {
      this.$router.push({
        name: 'cart'
      })
    },
    addCart () {
      console.log('添加到购物车')
      alert('添加成功')
      this.cartList.push({
        productName: this.productName,
        price: this.price,
        num: 1,
        sum: this.price,
        delete: '删除'
      })
    },
    back () {
      this.$router.back()
    }
  },
  created () {
    this.detailImg = this.$route.params.detailImg
    this.productName = this.$route.params.name
    this.price = this.$route.params.price
  },
  computed: {
    ...mapState('cart', [
      'cartList'
    ])
  }
}
</script>

<style lang="scss" scoped>
.product-detail {
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
  .product-content {
  }
  .add-car {
    border-top: 1px solid #eee;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0px;
    width: 100vw;
    div {
      background-color: red;
      width: 100px;
      height: 22px;
      border-radius: 4px;
      span {
        color: white;
        font-size: 16px;
      }
    }
  }
}
</style>
