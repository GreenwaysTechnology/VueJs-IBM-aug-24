<script setup>
import { useRoute } from 'vue-router';
const route = useRoute()
console.log(route.params.id)
//You have to write another api call to get single todo detail
</script>
<template>
  <h1>{{route.params.id}} details</h1>
</template>

