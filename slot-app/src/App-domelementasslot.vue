<script setup>
import Child from './components/Child.vue'
</script>

<template>
  <Child>
    <!-- Passing dom element or other component as Child -->
    <h1>Hello</h1>
  </Child>
  
  <Child/>
</template>
<style scoped>
</style>
