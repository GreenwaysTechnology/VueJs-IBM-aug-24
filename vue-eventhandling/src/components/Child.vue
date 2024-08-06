<script setup>
const emit = defineEmits(["onRequest"]);

const onSend = () => {
  //send data to parent
  emit("onRequest", "Hello,I am from Child");
};
</script>

<template>
  <div>
    <h1>Child Component</h1>
    <button @click="onSend">Send</button>
  </div>
</template>
