<script setup>
import {ref} from 'vue'
const message = ref('hello')
</script>

<template>
 <slot :message="message"></slot>
</template>  
<style scoped>
</style>
