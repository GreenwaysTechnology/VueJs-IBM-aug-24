<script>
export default {
  components: {},
  data() {
    //you must return object
    return {
      firstName: "Subramanian",
      lastName: "Murugan",
      status: true,
      address: {
        city: "Coimbatore",
        state: "Tamil nadu",
      },
    };
  },
};
</script>
<template>
  <div>
    <h2>{{ firstName }} {{ lastName }}</h2>
    <h2>{{ status ? "Available" : "Not Available"}}</h2>
    <p>
     {{address.city}},
    </p>
     <p>
     {{address.state}}
    </p>
  </div>
</template>
<style></style>
