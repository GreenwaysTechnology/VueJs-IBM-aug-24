<script setup>
import { ref } from "vue";
const message = ref("Hello");
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
    <input @input="getInput" :value="message" />
  </div>
</template>

<style scoped></style>
