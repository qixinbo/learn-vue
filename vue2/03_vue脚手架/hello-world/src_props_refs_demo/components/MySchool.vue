<template>
  <div class="hello">
    <!-- ref用于收集元素 -->
    <h1 ref="title"> {{msg}} </h1>
    <h1> age: {{anotherAge}} </h1>
    <button @click="showDOM">点我输出上面的DOM元素</button>
    <button @click="updateAge">更新age</button>
  </div>
</template>

<script>
export default {
  name: 'MySchool',
  data(){
    return {
      msg: "Hello",
      anotherAge: this.age
    } //一定要写return
  },

  // 尽可能不要直接修改props接收到的参数
  // props:['age'], // 1、简单接收

  // 2、 接收的同时对类型进行限制
  // props:{
  //   age: Number
  // },

  props:{
    age:{
      type: Number, // 配置类型
      // required: true, // 必须得传参
      default: 20 // 默认值
    }
  },

  methods:{
    showDOM(){
      console.log(this.$refs.title)
    },
    updateAge(){
      this.anotherAge++ 
    }
  }
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
