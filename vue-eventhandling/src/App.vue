<!-- Parent Component -->
<script setup>
import { ref } from "vue";
import Child from "./components/Child.vue";

const data = ref("");
const getData = (evt) => {
  console.log(evt);
  data.value = evt;
};
</script>

<template>
  <div>
    <h1>Parent Component</h1>
    <h2>Data From Child : {{ data }}</h2>
    <hr />
    <Child @on-request="getData" />
  </div>
</template>
