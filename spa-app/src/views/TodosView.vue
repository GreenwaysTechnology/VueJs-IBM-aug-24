<script setup>
import { onMounted } from "vue";
import { todosStore } from "../stores/todos.js";
const todos = todosStore();

onMounted(() => {
  todos.getTodos();
});
</script>
<template>
  <h1>Todo App</h1>
  <ul>
    <li v-for="todo in todos.todoslist">
      <RouterLink :to="'/todosdetails/' + todo.id">
        <span>{{ todo.title }}</span>
      </RouterLink>
    </li>
  </ul>
</template>
