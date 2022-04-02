<template>
  <div class="hello">
    <!-- ref用于收集元素 -->
    <h1 ref="title"> {{msg}} </h1>
    <h1> age: {{age}} </h1>
    <button @click="updateAge">更新age</button>
    <button @click="testHello">点我测试插件中的hello方法</button>
  </div>
</template>

<script>
export default {
  name: 'MySchool',
  data(){
    return {
      msg: "Hello",
      age: 18
    } //一定要写return
  },

  methods:{
    updateAge(){
      this.age++ 
    },
    testHello(){
      this.hello()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- scoped限定css的范围 -->
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
.hello{
  background-color: orange;
}
</style>
