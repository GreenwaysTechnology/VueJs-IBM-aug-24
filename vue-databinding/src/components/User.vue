<!-- <script>
export default {
,  components: {},
  props: ["id", "name", "email"],
};
</script>
<template>
  <div>
    <h1>User information</h1>
    <h2>Id {{ id }}</h2>
    <h2>Name {{ name }}</h2>
    <h2>Email {{ email }}</h2>
  </div>
</template>
<style></style> -->

<!-- Setup fun -->
<!-- <script>
export default {
  components: {},
  props: ["id", "name", "email"],
  setup() {
    
  },
};
</script>
<template>
  <div>
    <h1>User information</h1>
    <h2>Id {{ id }}</h2>
    <h2>Name {{ name }}</h2>
    <h2>Email {{ email }}</h2>
  </div>
</template>
<style></style> -->
<!-- 
<script setup>
const props = defineProps(["id", "name", "email"]);
</script>
<template>
  <div>
    <h1>User information</h1>
    <h2>Id {{ props.id }}</h2>
    <h2>Name {{ props.name }}</h2>
    <h2>Email {{ props.email }}</h2>
  </div>
</template>
<style></style> -->

<!-- Props with validation -->

<script setup>
const props = defineProps({
  id: [Number, String],
  name: String,
  email: String,
  status: {
    validator(value) {
      return ["Available", "NotAvailable"].includes(value);
    },
  },
});
</script>
<template>
  <div>
    <h1>User information</h1>
    <h2>Id {{ props.id }}</h2>
    <h2>Name {{ props.name }}</h2>
    <h2>Email {{ props.email }}</h2>
    <h2>Status {{ props.status }}</h2>
  </div>
</template>
<style></style>
