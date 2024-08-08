<script setup>
import { useMouse } from "./composables/mouse";
const { x, y } = useMouse();
</script>

<template>
  <div>
    <h1>Mouse Position is at X: {{ x }} Y: {{ y }}</h1>
  </div>
</template>

<style scoped></style>
