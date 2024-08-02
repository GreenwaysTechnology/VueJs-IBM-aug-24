<script>
export default {
  data() {
    //reactive state
    return {
      counter: 0,
    };
  },
  methods: {
    inc() {
      //access reactive state variable inside listener
      this.counter++; //mutation happens
    },
  },
};
</script>
<template>
  <div>
    <h1>Counter App</h1>
    <h2>Value : {{ counter }}</h2>
    <button @click="inc">+</button>
  </div>
</template>
<style></style>
