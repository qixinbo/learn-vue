<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)">
      <span> {{todo.title}} </span>
    </label>
    <button class="btn btn-danger" @click="deleteItem(todo.id)">
      删除
    </button>
  </li>
</template>

<script>
  export default{
    name: 'TodoItem',
    props: ['todo', 'checkTodo', 'deleteTodo'],
    methods:{
      handleCheck(id){
        this.checkTodo(id)
      },
      deleteItem(id){
        if(confirm("确定删除吗？")){
          this.deleteTodo(id)
        }
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