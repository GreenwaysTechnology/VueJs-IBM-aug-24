<!-- <script>
export default {
  components: {},
  data() {
    return {
      address: {
        city: "Coimbatore",
        state: "Tamil nadu",
      },
    };
  },
};
</script>
<template>
  <p>{{ address.city }},</p>
  <p>
    {{ address.state }}
  </p>
</template>
<style></style> -->

<!-- <script>
export default {
  components: {},
  setup () {
  let address ={
        city: "Coimbatore",
        state: "Tamil nadu",
      },
    return {
        address
    }
  }
};
</script>
<template>
  <p>{{ address.city }},</p>
  <p>
    {{ address.state }}
  </p>
</template>
<style></style> -->

<script setup>
let address = {
  city: "Coimbatore",
  state: "Tamil nadu",
};
</script>
<template>
  <p>{{ address.city }},</p>
  <p>
    {{ address.state }}
  </p>
</template>
<style></style>
