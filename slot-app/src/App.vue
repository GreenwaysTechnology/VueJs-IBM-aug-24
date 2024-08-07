<script setup>
import ScopedSlot from './components/ScopeSlot.vue'
</script>

<template>
  <ScopedSlot v-slot="slotProps">
        {{slotProps.message}}
  </ScopedSlot>
</template>  
<style scoped>
</style>
