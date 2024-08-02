<script>
export default {
  components: {},
  data() {
    return {};
  },
  //listener
  methods: {
    //hello listener
    hello(evt) {
      console.log("hello is called");
    },
    hai(evt) {
      console.log("hai is called");
    },
  },
};
</script>
<template>
  <div>
    <button v-on:click="hello">Hello</button>
    <button @click="hai">Hai</button>
  </div>
</template>
<style></style>
