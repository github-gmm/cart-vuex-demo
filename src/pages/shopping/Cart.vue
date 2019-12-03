<template>
  <div class="cart">
    <div class="cart-title">
      <div class="cart-img" @click="back">
        <img src="../../assets/back.svg"/>
      </div>
      <div>
        <span>购物车</span>
      </div>
      <div class="cart-img">
      </div>
    </div>
    <div v-if="cartList.length > 0">
      <table>
        <thead>
          <tr>
            <td class="weight-style">商品信息</td>
            <td class="weight-style">单价</td>
            <td class="weight-style">数量</td>
            <td class="weight-style">小计</td>
            <td class="weight-style">删除</td>
          </tr>
        </thead>
        <tbody>
          <template v-for="(item, index) in cartList">
            <tr :key="index">
              <td class="content-style">{{item.productName}}</td>
              <td class="content-style">{{item.price}}</td>
              <td class="content-style">
                <div class="op-style" style="float: left" @click="unIncreame(item.productName)">-</div>
                {{item.num}}
                <div class="op-style" style="float: right" @click="increame(item.productName)">+</div></td>
              <td class="content-style">{{item.num  * item.price}}</td>
              <td class="content-style" style="color: red" @click="deleteItem(item.productName)">{{item.delete}}</td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
    <div class="total"  v-if="cartList.length > 0">
      <div>
        数量合计：{{getTotalNum}}
      </div>
      <div>
        价格合计：{{getTotalPrice}}
      </div>
    </div>
    <div class="pay" v-if="cartList.length > 0">
      <div @click="pay">
        <span>结算</span>
      </div>
    </div>
    <div class="pay" v-if="cartList.length === 0">
      <div @click="back">
        <span>去购物</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  name: 'Cart',
  methods: {
    ...mapActions('cart', [
      'addProduct',
      'reduceProduct',
      'deleteProduct',
      'clearCartList'
    ]),
    back () {
      this.$router.push({
        name: 'productList'
      })
    },
    deleteItem (productName) {
      this.deleteProduct(productName)
    },
    unIncreame (productName) {
      this.reduceProduct(productName)
    },
    increame (productName) {
      this.addProduct(productName)
    },
    pay () {
      this.clearCartList()
      alert('已支付')
    }
  },
  computed: {
    ...mapState('cart', [
      'cartList'
    ]),
    ...mapGetters('cart', [
      'getTotalPrice',
      'getTotalNum'
    ])
  }
}
</script>

<style lang="scss" scoped>
.cart {
  height: 100vh;
  overflow: hidden;
  .cart-title {
    height: 44px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    font-weight: bold;
    border-bottom: 1px solid #eee;
    margin-bottom: 10px;
    .cart-img {
      height: 44px;
      width: 10%;
      display: flex;
      justify-content: center;
    }
  }
  .total {
    display: flex;
    justify-content: flex-end;
    div {
      margin: 10px;
    }
  }
  .op-style {
    border: 1px solid #eee;
    width: 20px;
    height: 20px;
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .pay {
    border-top: 1px solid #eee;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0px;
    width: 100vw;
    div {
      background-color: green;
      width: 70px;
      height: 22px;
      border-radius: 4px;
      span {
        color: white;
        font-size: 16px;
      }
    }
  }
  .weight-style {
    font-weight: bold;
    font-size: 16px;
  }
  .content-style {
    font-size: 14px;
  }
}
table {
  width: 100% !important;
  td {
    width: 20% !important;
  }
}
</style>
