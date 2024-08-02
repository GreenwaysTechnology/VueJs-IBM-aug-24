<script setup>
const onUpdate = (name) => {
  console.log(name);
};
</script>
<template>
  <button @click="onUpdate('Subramanian')">Send</button>
</template>
<style></style>
