<template>
  <div class="hello">
    <h4>{{ msg }}</h4>
    <h2>vuex计数1： {{ count }}</h2>
    <button @click="add">+</button>
    <button @click="unAdd">-</button>
    <!-- <h2>count别名countAlias： {{ countAlias }}</h2>
    <h2>vuex计数2： {{ countPlusLocalState }}</h2>
    getListByAgeSort : {{getListByAgeSort}} <br/>
    getListById: {{getListById}} -->
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      localCount: 12
    }
  },
  computed: {
    ...mapState({
      count: state => state.count, // 绑定state.count
      countAlias: 'count', // count别名
      countPlusLocalState (state) { // 根据count计算出依赖它的相关变量
        return state.count + this.localCount
      }
    }),
    ...mapGetters({
      getListByAgeSort: 'getListByAgeSort'
    }),
    getListById () {
      return this.$store.getters.getListById(2)
    }
  },
  methods: {
    ...mapMutations([
      'add',
      'unAdd'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
