<script>
export default {
  components: {
    
  },
  setup() {
    let firstName = "Subramanian";
    let lastName = "Murugan";
    let status = true;
    let address = {
      city: "Coimbatore",
    };
    //return state object
    return {
      firstName,
      lastName,
      status,
      address,
    };
  },
};
</script>
<template>
  <div>
    <h2>{{ firstName }} {{ lastName }}</h2>
    <h2>{{ status ? "Available" : "Not Available" }}</h2>
    <p>{{ address.city }},</p>
    <p>
      {{ address.state }}
    </p>
  </div>
</template>
<style></style>
