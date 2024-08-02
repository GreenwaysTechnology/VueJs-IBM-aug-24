<script setup>
const onUpdate = (name,evt) => {
  console.log(name);
};
</script>
<template>
  <button @click="onUpdate('Subramanian',$event)">Send</button>
</template>
<style></style>
