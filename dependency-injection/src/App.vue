<script setup>
import { ref, provide } from "vue";

import Child1 from "./components/Child1.vue";
const message = ref("hello");
provide("greeting", message);
// provide("welcome", "welcome");
</script>

<template>
  <Child1 :message="message" />
</template>

<style scoped></style>
