<template>
  <div class="hello">
    <h1>当前求和为：{{sum}}</h1>
    <h1>当前求和乘以10为：{{bigSum}}</h1>
    <h1>我在{{school}}+{{subject}}</h1>
    <select v-model="n">
      <option :value="1"> 1 </option> <!-- 一定要加冒号，使之成为表达式 -->
      <option :value="2"> 2 </option>
      <option :value="3"> 3 </option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      n: 1,
    }
  },
  computed:{
    // 借助mapState生成计算属性，不能简写，因为后面的sum是字符串，不是表达式
    // ...mapState({sum:'sum', school:'school', subject:'subject'}),
    // 数组写法
    ...mapState(['sum', 'school', 'subject']),
    // 借助mapGetters生成计算属性
    ...mapGetters(['bigSum'])
  },
  methods:{
    // increment(){
    //   this.$store.commit('JIA', this.n)
    // },
    // decrement(){
    //   this.$store.commit('JIAN', this.n)
    // },

    // 借助mapMutations生成对应的方法，方法中会调用commit联系mutations
    ...mapMutations({increment:'JIA', decrement:'JIAN'}),
    // ...mapMutations(['JIA', 'JIAN']),

    // incrementOdd(){
    //   this.$store.dispatch('jiaOdd', this.n)
    // },
    // incrementWait(){
    //   this.$store.dispatch('jiaWait', this.n)
    // }

    // 借助mapActions生成对应的方法，方法中会调用dispath去联系actions
    ...mapActions({incrementOdd:'jiaOdd', incrementWait:'jiaWait'}),
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
