<script setup>
const props = defineProps({
  title: {
    default: "IBM",
  },
});
//update the props
props.title = "Microsoft";
</script>
<template>
  <header>
    <h1>{{ props.title }}</h1>
  </header>
</template>
<style></style>
