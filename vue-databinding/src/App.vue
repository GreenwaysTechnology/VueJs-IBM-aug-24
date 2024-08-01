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
<script>
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
    <User id="1" name="subu" email="subu@gmail.com" />
    <User id="2" name="murugan" email="murugan@gmail.com" />
    <!-- Dynamic property -->
    <User :id="id" :name="name" :email="email" />
  </div>
</template>
<style></style>
