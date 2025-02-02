<script setup lang="ts">
import { ref } from 'vue'
import type Todo from '@/Types/Todo';
import todoList from '@/components/todoList.vue';
const newTodo = ref<string>('')
const todo = ref<Todo[]>([{ value: 'Test', done: true, id: 0 }]) 
const addTodo = ()=>{
  const newItem = { value: newTodo.value, done: false, id: todo.value.length? todo.value.length + 1 : 1 }
  newTodo.value = ''
  todo.value = [...todo.value, newItem]
}
const completeTodo = (id:number)=>{
  todo.value = todo.value.map(item=>item.id === id? {...item, done:!item.done} : item)
}
const deleteTodo = (id:number)=>{
  todo.value = todo.value.filter(item=>item.id!== id)
}
</script>

<template>
  <main>
    <div class='container'>
      <header class='header'>
        <h1>Todo List</h1>
      </header>

      <section class='todo-input-section'>
        <div class='todo-input-wrapper'>
          <input type='text' v-model="newTodo" id='todo-input' placeholder='What do you want to do?' @keydown.enter="addTodo()" />
          <button id='add-button' @click="addTodo()">Add</button>
        </div>
      </section>

      <section class='todo-list-section'>
       <todo-list :todo = "todo" @complete-todo="completeTodo" @delete-todo="deleteTodo"/>
      </section>
    </div>
  </main>
</template>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

main {
  font-family: sans-serif;
  background-color: gainsboro;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  width: 100%;
}

.container {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  padding: 2rem;
}

.header {
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1rem;
}

#todo-input {
  width: 80%;
  padding: 0.5rem;
  border: 2px solid green;
  border-radius: 5px;
}

#add-button {
  padding: 1rem;
  background-color: green;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

#add-button:hover {
  background-color: lightgreen;
  color: #333;
}

#todo-list {
  list-style-type: none;
}

.todo-item {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
}

button {
  border: none;
  border-radius: 5px;
  padding: 0.5rem;
  cursor: pointer;
}

.complete-button {
  background-color: goldenrod;
  color: white;
}

.complete-button:hover {
  background-color: lightgoldenrodyellow;
  color: #333;
}

.delete-button {
  background-color: red;
  color: white;
}

.delete-button:hover {
  background-color: black;
}

.delete-button:active {
  background-color: linear-gradient(to bottom right, red 0%, black 100%);
}
</style>