<script setup>
import { reactive, computed } from "vue";
const author = reactive({
  name: "John Doe",
  books: ["Vue 2- Advanced Guide", "Vue 3- Basic Guide"],
});

const publishedMessage = computed(() => {
  return author.books.length > 0 ? "Yes" : "No";
});
</script>
<template>
  <p>Has Published Books:</p>
  <span>{{ publishedMessage }}</span>
</template>
