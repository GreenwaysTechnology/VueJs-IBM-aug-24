<!-- <script>
import User from "./components/User.vue";
export default {
  components: {
    User,
  },
  data() {
    return {
      id: 3,
      name: "Ram",
      eamil: "ram@gmail.com",
    };
  },
};
</script>
<template>
  <div>
    <!-- Static Property -->
    <!-- <User id="1" name="subu" email="subu@gmail.com" />
    <User id="2" name="murugan" email="murugan@gmail.com" />
    Dynamic property -->
    <!-- <User :id="id" :name="name" :email="email" />
  </div>
</template> -->
<!-- <style></style> --> -->

<!-- setup -->
<!-- <script>
import User from "./components/User.vue";
export default {
  components: {
    User,
  },
  setup() {
    
    return {
      id: 3,
      name: "Ram",
      eamil: "ram@gmail.com",
    };
  },
};
</script>
<template>
  <div>
    <!-- Static Property -->
    <!-- <User id="1" name="subu" email="subu@gmail.com" />
    <User id="2" name="murugan" email="murugan@gmail.com" />
    <!-- Dynamic property -->
    <!-- <User :id="id" :name="name" :email="email" /> --> -->
  <!-- </div>
</template>
<style></style> --> 

<script setup>
import User from "./components/User.vue";
let id =1;
let name=34
let email="karthik@gmail.com"
let status ="Available"
</script>
<template>
  <div>
    <!-- Static Property -->
    <User id="1" name="subu" status="Available" email="subu@gmail.com" />
    <User id="2" name="murugan" status="Available" email="murugan@gmail.com" />
    <!-- Dynamic property -->
    <User :id="id" :name="name" :status="status" :email="email" />
  </div>
</template>
<style></style>

