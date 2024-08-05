<script setup>
import { ref } from "vue";
import TODOS from "./mock-data/Todos";
const todos = ref(TODOS);
const filter = () => {
  return todos.value= todos.value.filter((todo) => todo.completed);
};
</script>

<template>
  <div>
    <button @click="filter">FilterByStatus</button>
    <h1>Total todos: {{ todos.length }}</h1>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <span>{{ todo.title }}</span>
      </li>
    </ul>
  </div>
</template>
