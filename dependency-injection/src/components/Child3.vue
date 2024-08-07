<script setup>
import { inject } from "vue";
const props = defineProps(["message"]);
const greeting = inject("greeting");
const welcome = inject("welcome", "Default");
const company = inject("companyName");
</script>

<template>
  <h1>{{ props.message }}</h1>
  <h1>{{ greeting }} {{ welcome }} {{company}}</h1>
</template>

<style scoped></style>
