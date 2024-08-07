<script setup>
import Child3 from './Child3.vue'
const props = defineProps(["message"]);

</script>

<template>
    <Child3 :message="props.message"/>
</template>

<style scoped></style>
