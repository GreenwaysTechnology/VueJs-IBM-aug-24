<script setup>
import MyButton from "./components/MyButton.vue";
</script>
<template>
  <div class="container">
    <h1>Parent Component</h1>
    <!-- sending html attribute as prop: Fallthrough attributes -->
    <MyButton class="fancy-btn" />
    <br />
    <div style="margin:10px;10px;10px;10px">
      <button class="fancy-btn">Parent</button>
    </div>
  </div>
</template>
<style>
.fancy-btn {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline;
  font-size: 16px;
}
</style>
