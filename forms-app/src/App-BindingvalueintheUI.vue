<script setup>
import { ref } from "vue";
const message = ref("");
const getInput = (evt) => {
  const value = evt.target.value;
  console.log(value);
  message.value = value
};
</script>
<template>
  <div>
    <h1>Forms</h1>
    <h2>Message: {{message}}</h2>
    <input @input="getInput" />
  </div>
</template>

<style scoped></style>
