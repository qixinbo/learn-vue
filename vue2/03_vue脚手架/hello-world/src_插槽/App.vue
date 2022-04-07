<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App">
      <img src="./assets/logo.png">
    </HelloWorld>
    <button @click="obtainInfo">获取信息</button>
    <ul>
      <li v-for='pet in pets' :key="pet.id">
        {{ pet.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
    return {pets:''}
  },
  methods:{
    obtainInfo(){
      // 一定要用localhost而不是127.0.0.1
      axios.get('http://localhost:8080/api/pets').then(
        response => {
          console.log('成功', response.data)
          this.pets = response.data
        },
        error => {
          console.log('失败')
        }
        )
    }
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
