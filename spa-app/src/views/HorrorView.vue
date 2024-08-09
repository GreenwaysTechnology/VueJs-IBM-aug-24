<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

const gotoReview = () => {
    router.push('/review')
}
</script>
<template>
  <h1>Horror View</h1>
  <button @click="gotoReview">Review</button>
</template>
