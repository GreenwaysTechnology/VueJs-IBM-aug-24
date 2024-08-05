<script setup>
import { reactive } from "vue";

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
        completed: false
    },
    {
        userId: 1,
        id: 3,
        title: "fugiat veniam minus",
        completed: false
    },
]

const todosList = reactive(TODOS);
const onSelectItem=()=>{
    console.log('item is selected')
}
</script>
<template>
  <div>
    <ul>
      <li v-for="todo in todosList" @click="onSelectItem">
     {{ todo.title }}
      </li>
    </ul>
  </div>
</template>
