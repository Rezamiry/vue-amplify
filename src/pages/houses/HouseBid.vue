<template>
    <section>
      <base-card>
        <h2>Place a bid for this house..</h2>
        <house-bid-form></house-bid-form>
      </base-card>
    </section>
  </template>
  
  <script>
  import HouseBidForm from '../../components/houses/HouseBidForm.vue';
  
  export default {
    components: {
      HouseBidForm,
    },
  };
  </script>
  