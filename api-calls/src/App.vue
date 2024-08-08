<script setup>
import { onMounted, reactive } from "vue";

const state = reactive({
  data: null,
  error: null,
});

//write function to fecth data
async function fetchAlbums() {
  try {
    const url = "https://jsonplaceholder.typicode.com/albums";
    const response = await fetch(url);
    const albums = await response.json();
    console.log(albums);
    state.data = albums;
  } catch (err) {
    console.log(err);
    state.error = err;
  }
}

//api calls must be done inside onmount
onMounted(() => {
  //invoke fetchAlbums()
  // setTimeout(() => {
  //   fetchAlbums();
  // }, 5000);
  fetchAlbums();
});
</script>

<template>
  <div>
    <h1>Albums</h1>
    <div v-if="state.error">
      <h1>Oops! {{ state.error.message }}</h1>
    </div>
    <div v-else-if="state.data">
      <div v-for="album of state.data">
        <h3>{{ album.title }}</h3>
      </div>
    </div>
    <div v-else>
      <h1>Loading....</h1>
    </div>
  </div>
</template>

<style scoped></style>
