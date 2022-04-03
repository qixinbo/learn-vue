<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="emitEvent">触发自定义事件</button>
    <button @click="emitEvent2">触发自定义事件2</button>
    <button @click="unbindEvent">解绑自定义事件</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {temp: "temp data"}
  },
  methods:{
    emitEvent(){
      this.$emit('demoEvent', this.temp)
    },
    emitEvent2(){
      this.$emit('demoEvent2', this.temp)
    },
    unbindEvent(){
      this.$off('demoEvent') //解绑一个事件
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
