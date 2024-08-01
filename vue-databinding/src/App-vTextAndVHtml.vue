<script setup>
const name = "Subramanian";
</script>

<template>
  <h1>Interpolation using "`Double Curly braces`" notation</h1>
  <h2>Name {{ name }}</h2>
  
  <h1>Interpolation using Directive vtext</h1>
  <h2 v-text="`Name ${name}`"></h2>

  <h1>Interpolation using Directive vhtml</h1>
  <h2 v-html="`Name ${name}`"></h2>
</template>
<style></style>
