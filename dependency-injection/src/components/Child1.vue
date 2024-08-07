<script setup>
import Child2 from './Child2.vue'
const props = defineProps(["message"]);

</script>

<template>
    <Child2 :message="props.message"/>
</template>

<style scoped></style>
