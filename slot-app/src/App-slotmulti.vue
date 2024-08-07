<!-- <script setup>
import Layout from "./components/Layout.vue";
import Header from "./components/Header.vue";
import Logo from "./components/Logo.vue";
import Article from "./components/Articles.vue";
</script>

<template>
  <Layout>
    <template v-slot:header>
      <Header>
        <Logo />
      </Header>
    </template>
    <template v-slot:main>
      <Article />
    </template>
    <template v-slot:footer>
      <footer>
        <p>footer goest here</p>
      </footer>
    </template>
  </Layout>
</template>
<style scoped></style> -->


<!-- <script setup>
import Layout from "./components/Layout.vue";
import Header from "./components/Header.vue";
import Logo from "./components/Logo.vue";
import Article from "./components/Articles.vue";
</script>

<template>
  <Layout>
    <template #header>
      <Header>
        <Logo />
      </Header>
    </template>
    <template #main>
      <Article />
    </template>
    <template #footer>
      <footer>
        <p>footer goes here</p>
      </footer>
    </template>
  </Layout>
</template>
<style scoped></style>
 -->
<!-- <script setup>
import Layout from "./components/Layout.vue";
import Header from "./components/Header.vue";
import Logo from "./components/Logo.vue";
import Article from "./components/Articles.vue";
</script>

<template>
  <Layout>
    <template #default>
      <Header>
        <Logo />
      </Header>
    </template>
    <template #main>
      <Article />
    </template>
    <template #footer>
      <footer>
        <p>footer goes here</p>
      </footer>
    </template>
  </Layout>
</template>
<style scoped></style>
 -->
 <!-- Dynamic slot -->
<script setup>
import {ref} from 'vue'

import Layout from "./components/Layout.vue";
import Header from "./components/Header.vue";
import Logo from "./components/Logo.vue";
import Article from "./components/Articles.vue";

const main = ref('main')

</script>

<template>
  <Layout>
    <template #default>
      <Header>
        <Logo />
      </Header>
    </template>
    <template #[main]>
      <Article />
    </template>
    <template #footer>
      <footer>
        <p>footer goes here</p>
      </footer>
    </template>
  </Layout>
</template>
<style scoped></style>

