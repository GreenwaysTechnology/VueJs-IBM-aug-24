<script setup>
const imgUrl = "/src/assets/logo.svg";
const isHidden = true;
const isEnabled= false 
</script>

<template>
  <div>
    <h1>Static Binding</h1>
    <img src="./assets/logo.svg" height="100" width="100" />
  </div>
  <div>
    <h1>Dynamic Binding</h1>
    <img v-bind:src="imgUrl" height="100" width="100" />
  </div>
  <div>
    <h1>Dynamic binding with show and hide</h1>
    <article v-bind:hidden="isHidden">This is article</article>
  </div>
  <div>
    <h1>Dynamic binding with enable and disable</h1>
    <button v-bind:disabled="isEnabled">button</button>
  </div>
</template>
<style></style>
