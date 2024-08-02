<script setup>
const hello = (evt) => {
  console.log("hello");
};
const hai = (evt) => {
  console.log("hai");
};
</script>
<template>
  <div>
    <button v-on:click="hello">Hello</button>
    <button @click="hai">Hai</button>
  </div>
</template>
<style></style>
