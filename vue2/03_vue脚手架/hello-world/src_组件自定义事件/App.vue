<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- 给HelloWorld子组件的实例对象绑定demoEvent -->
    <HelloWorld 
      v-on:demoEvent="demo"
      msg="Welcome to Your Vue.js App"/>
    <!-- 第二种实现方法 -->
    <!-- 以及对组件绑定原生事件 -->
    <HelloWorld 
      ref="helloworld"
      msg="Welcome to Your Vue.js App"
      @click.native="show"
      />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods:{
    demo(arg){
      console.log('demo start', arg)
    },
    show(){
      alert("hello")
    }
  },
  mounted(){
    this.$refs.helloworld.$on('demoEvent2', this.demo)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
