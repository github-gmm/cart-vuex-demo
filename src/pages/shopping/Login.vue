<template>
  <div class="login-st">
    <div class="login-div">
      <h4>登陆界面</h4>
      <div class="item-div">
        <label>用户名</label>
        <div class="input-div">
          <input v-model="userName"/>
        </div>
      </div>
      <div class="item-div">
        <label>密码</label>
        <div class="input-div">
          <input v-model="passWord"/>
        </div>
      </div>
      <div class="button-div">
        <div @click="loginIn">登陆</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
      userName: '',
      passWord: ''
    }
  },
  computed: {
    ...mapState([
      'token'
    ])
  },
  methods: {
    loginIn () {
      console.log(`账号：admin   密码：admin`)
      if (this.token) {
        this.$router.push({
          name: 'productList'
        })
      } else {
        // 登陆
        if (this.userName === 'admin' && this.passWord === 'admin') {
          setTimeout(() => {
            this.changeToken({token: 'tydfhdufubvdcjnsocndjvsidnOSNJDSV'})
            if (this.token) {
              this.$router.push({
                name: 'productList'
              })
            }
          }, 2000)
        } else {
          alert('账号密码错误！')
        }
      }
    },
    ...mapActions([
      'changeToken'
    ])
  }
  // 登陆：需要保存登陆获取的token信息，当token失效时，自动跳出页面重新登陆
}
</script>

<style lang="scss" scoped>
.login-st {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eee;
  .login-div {
    width: 80vw;
    height: 40vh;
    display: flex;
    background-color: #ffffff;
    border-radius: 10px;
    flex-direction: column;
    justify-content: center;
    .item-div {
      margin: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      .input-div {
        padding-left: 5px;
      }
      label {
        width: 18%;
      }
      button {
        text-align: center;
      }
    }
    .button-div {
      display: flex;
      justify-content: center;
      div {
        width: 50px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #147fbd;
        border-radius: 4px;
        font-size: 14px;
        color: white;
        cursor: pointer;
      }
    }
  }
}
</style>
