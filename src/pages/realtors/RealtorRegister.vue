<template>
    <section>
      <base-card>
        <h2>Register as a Realtor!</h2>
        <realtor-form @save-data="saveData"></realtor-form>
      </base-card>
    </section>
  </template>
  
  <script>
  import RealtorForm from '../../components/realtors/RealtorForm.vue';
  
  export default {
    components: {
        RealtorForm,
    },
    methods: {
        saveData(data) {
            this.$store.dispatch("realtors/registerRealtor", data);
            this.$router.replace("/realtors")
        }
    }
  };
  </script>
  