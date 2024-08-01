<!-- <script>
import Address from './Address.vue'
export default {
  components: {
    Address 
  },
  data() {
    return {
      firstName: "Subramanian",
      lastName: "Murugan",
      status: true
    };
  },
};
</script>
<template>
  <div>
    <h2>{{ firstName }} {{ lastName }}</h2>
    <h2>{{ status ? "Available" : "Not Available" }}</h2>
    <Address/>
  </div>
</template>
<style></style> -->

<!-- <script>
import Address from "./Address.vue";
export default {
  components: {
    Address,
  },
  setup() {
    let firstName = "Subramaian";
    let lastName = "Murugan";
    let status = true;
    return {
      firstName,
      lastName,
      status,
    };
  },
};
</script>
<template>
  <div>
    <h2>{{ firstName }} {{ lastName }}</h2>
    <h2>{{ status ? "Available" : "Not Available" }}</h2>
    <Address />
  </div>
</template>
<style></style> -->

<script setup>
import Address from "./Address.vue";
let firstName = "Subramaian";
let lastName = "Murugan";
let status = true;
</script>
<template>
  <div>
    <h2>{{ firstName }} {{ lastName }}</h2>
    <h2>{{ status ? "Available" : "Not Available" }}</h2>
    <Address />
  </div>
</template>
<style></style>
