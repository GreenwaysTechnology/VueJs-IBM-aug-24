<script setup>
import { ref } from "vue";
const isActive = ref(true);
const zoom = ref(true);
const toggle = () => {
  isActive.value = !isActive.value;
  zoom.value = !zoom.value;
};
</script>

<template>
  <!-- <div class="active">
    <h1>Hello</h1>
  </div> -->
  <!-- <div :class="{ active: isActive }">
    <h1>Hello</h1>
  </div> -->
  <div :class="{ active: isActive, zoom: zoom }">
    <h1>Hello</h1>
  </div>
  <button @click="toggle">Toggle</button>
</template>

<style scoped>
.active {
  color: blue;
}
.zoom {
  font-size: 50px;
}
</style>
