<script setup>

const getInput= (evt)=>{
  const value = evt.target.value 
  console.log(value)
}
</script>
<template>
  <div>
    <h1>Forms</h1>
    <input @input="getInput" >
  </div>
</template>

<style scoped></style>
