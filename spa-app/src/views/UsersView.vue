<!-- <script setup>
import { useRoute } from "vue-router";
const route = useRoute();
console.log(route.params.id);
</script>
<template>
  <h1>User details {{ route.params.id }}</h1>
  {{ $route.params }}
  {{ $route.params.id }} details
</template> -->

<!-- Master Page -->
<script setup>
import { reactive } from "vue";
import { RouterLink } from "vue-router";

const USERS = [
  { id: 12, name: "Dr. Nice" },
  { id: 13, name: "Bombasto" },
  { id: 14, name: "Celeritas" },
  { id: 15, name: "Magneta" },
  { id: 16, name: "RubberMan" },
  { id: 17, name: "Dynama" },
  { id: 18, name: "Dr. IQ" },
  { id: 19, name: "Magma" },
  { id: 20, name: "Tornado" },
];
const users = reactive(USERS);
</script>
<template>
  <h1>Users Master Page</h1>
  <ul>
    <li v-for="user of users">
      <!-- <RouterLink :to="'/details/' + user.id">
        <span>{{ user.name }}</span>
      </RouterLink> -->
      <RouterLink :to="{ name: 'details', params: { id: user.id } }">
        <span>{{ user.name }}</span>
      </RouterLink>
    </li>
  </ul>
</template>
