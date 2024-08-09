<script setup>
import { ref } from "vue";
const message = ref("Hello");
</script>
<template>
  <div>
    <h1>Forms</h1>
    <h2>Message: {{ message }}</h2>
    <input v-model="message" />
  </div>
</template>

<style scoped></style>
