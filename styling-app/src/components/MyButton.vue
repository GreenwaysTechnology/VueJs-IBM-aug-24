<script>
export default {
  created() {
    console.log(this.$attrs);
  },
//   inheritAttrs: false,
};
</script>
<script setup>
import { useAttrs } from "vue";
const attrs = useAttrs();

console.log(attrs.class);
</script>
<template>
  <button class="large">Click</button>
</template>
<style scoped>
.fancy-btn {
  color: red;
}
.large {
  font-family: "Gill Sans Extrabold", sans-serif;
  font-weight: bold;
}
</style>
