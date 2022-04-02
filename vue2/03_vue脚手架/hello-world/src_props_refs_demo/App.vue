<template>
  <div id="app">
    <!-- 也可以给组件加ref，获取子组件或元素注册引用信息，用于组件间通信 -->
    <MySchool ref="myshool"/>
    <MySchool :age = "18" />
    <MySchool :age = "34"/>
  </div>
</template>

<script>
import MySchool from './components/MySchool.vue'

export default {
  name: 'App',
  components: {
    MySchool
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
