<script setup>
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, ref } from "vue";

const counter = ref(0);

onBeforeMount(() => {
  console.log("onBeforeMount is called");
});

onMounted(() => {
  console.log("onMounted is called");
});

onBeforeUpdate(() => {
  console.log("onBeforeUpdate is called");
});
onUpdated(() => {
  console.log("OnUpdated is called")
})
</script>

<template>
  <h1>Life Cycles</h1>
  <button @click="counter++">{{ counter }}</button>
</template>
<style scoped></style>
