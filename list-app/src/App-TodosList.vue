<script setup>
import { reactive } from "vue";
import TODOS from "./mock-data/Todos";
const todosList = reactive(TODOS);
</script>
<template>
  <div>
    <ul>
      <li v-for="todo in todosList">
        {{ todo.title }}
      </li>
    </ul>
  </div>
</template>
