<template>
  <section>
    <base-card>
      <h2>List a new house!</h2>
      <house-form></house-form>
    </base-card>
  </section>
</template>

<script>
import HouseForm from '../../components/houses/HouseForm.vue';

export default {
  components: {
    HouseForm,
  },
};
</script>
