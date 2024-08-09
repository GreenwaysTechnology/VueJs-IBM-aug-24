<script setup>
import { ref } from "vue";
const message = ref("Hello");
</script>
<template>
  <div>
    <h1>Forms</h1>
    <h2>Message: {{ message }}</h2>
    <input @input="(evt) => (message = evt.target.value)" :value="message" />
  </div>
</template>

<style scoped></style>
