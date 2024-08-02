<script>
export default {
  data() {
    //reactive state
    return {
      like: 0,
      dislike: 0,
    };
  },
  methods: {
    onLike() {
      //access reactive state variable inside listener
      this.like++; //mutation happens
    },
    onDislike() {
      //access reactive state variable inside listener
      this.dislike++; //mutation happens
    },
  },
};
</script>
<template>
  <div>
    <h1>Review App</h1>
    <h2>Like : {{ like }} Dislike {{ dislike }}</h2>
    <button @click="onLike">Like</button>
    <button @click="onDislike">DisLike</button>
  </div>
</template>
<style></style>
