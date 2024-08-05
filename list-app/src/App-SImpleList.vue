<script setup>
import { reactive } from "vue";
const List = reactive(["Subramanian", "Karthik", "Murugan"]);
</script>
<template>
  <div>
    <ul>
      <li v-for="name in List">
        {{ name }}
      </li>
    </ul>
  </div>
</template>
