<script setup>
import { reactive,ref } from "vue";

const TODOS = [
     
    {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false
    },
    {
        userId: 1,
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed: true
    },
    {
        userId: 1,
        id: 3,
        title: "fugiat veniam minus",
        completed: false
    },
]

const todosList = reactive(TODOS);

let selectedItem = ref(null)

const onSelectItem=(todo,evt)=>{
    console.log(todo)
    selectedItem.value = todo
}
</script>
<template>
  <div>
    <ul>
      <li v-for="todo in todosList" @click="onSelectItem(todo,$event)">
     {{ todo.title }}
      </li>
    </ul>
    <div v-if="selectedItem">
      <h2>Title : {{selectedItem.title}}</h2>
      <h2>Status: {{selectedItem.completed ? "Completed" : "Not Completed"}}</h2>
    </div>
  </div>
</template>
