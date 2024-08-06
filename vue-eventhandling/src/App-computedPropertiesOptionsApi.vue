<script>
export default {
  data() {
    return {
      author: {
        name: "John Doe",
        books: ["Vue 2- Advanced Guide", "Vue 3- Basic Guide"],
      },
    };
  },
  methods: {
    calculateBooksMessage() {
      console.log("method called");
      return this.author.books.length > 0 ? "Yes" : "No";
    },
  },
  computed: {
    publishedBooksMessage() {
      console.log("called");
      return this.author.books.length > 0 ? "Yes" : "No";
    },
  },
};
</script>
<template>
  <p>Has Published Books:</p>
  <!-- <span>{{ author.books.length > 0 ? "Yes" : "No" }}</span> -->
  <span>{{ publishedBooksMessage }}</span>
  <span>{{ publishedBooksMessage }}</span>
  <span>{{ publishedBooksMessage }}</span>
  <span>{{ publishedBooksMessage }}</span>
  <span>{{ publishedBooksMessage }}</span>
  <span>{{ publishedBooksMessage }}</span>
  <br />
  <div>
    <h2>{{ calculateBooksMessage() }}</h2>
    <h2>{{ calculateBooksMessage() }}</h2>
  </div>
</template>
