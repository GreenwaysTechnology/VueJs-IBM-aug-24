<script setup>
import { reactive } from "vue";
import TODOS from "./mock-data/Todos";
const todosList = reactive(TODOS);
</script>
<template>
  <div>
    <ul>
      <li v-for="(todo,index) in todosList" :key="todo.id">
          <p> {{index}} {{ todo.title }} </p>
      </li>
    </ul>
  </div>
</template>
