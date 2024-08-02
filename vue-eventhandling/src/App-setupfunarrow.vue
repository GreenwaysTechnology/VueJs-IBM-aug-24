<script>
export default {
  setup() {
    //event handler : ES 5 Syntax
    const hello = (evt) => {
      console.log("hello");
    };
    const hai = (evt) => {
      console.log("hai");
    };
    //must return function
    return {
      hello,
      hai,
    };
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
