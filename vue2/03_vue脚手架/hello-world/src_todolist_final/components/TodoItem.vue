<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)">
      <span v-show="!todo.isEdit"> {{todo.title}} </span>
      <input 
        type="text" 
        v-show="todo.isEdit" 
        :value="todo.title"
        @blur="handleBlur(todo, $event)"
        ref="inputTitle"
      />

    </label>
    <button class="btn btn-danger" @click="deleteItem(todo.id)">
      删除
    </button>
    <button v-show="!todo.isEdit" class="btn btn-edit" @click="editItem(todo)">
      编辑
    </button>
  </li>
</template>

<script>
  export default{
    name: 'TodoItem',
    props: ['todo'],
    methods:{
      handleCheck(id){
        this.$bus.$emit('checkTodo', id)
      },
      editItem(todo){
        if(todo.hasOwnProperty('isEdit')){
          todo.isEdit = true
        }
        else{
          // 必须使用$set使之称为响应式
          this.$set(todo, 'isEdit', true)
        }
        // nextTick要基于新更新的DOM进行操作
        this.$nextTick(function(){
          this.$refs.inputTitle.focus()
        })
      },
      deleteItem(id){
        if(confirm("确定删除吗？")){
          this.$bus.$emit('deleteTodo', id)
        }
      },
      handleBlur(todo, e){
        todo.isEdit = false
        if(!e.target.value.trim()) return alert("输入不能为空")
        this.$bus.$emit('updateTodo', todo.id, e.target.value)
      }
    }
  }
</script>

<style scoped>
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }

  li:hover{
    background-color: #ddd;
  }
  
  li:hover button{
    display: block;
  }
</style>