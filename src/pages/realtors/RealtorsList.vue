<template>
    <section>
      <base-card>
        <div class="controls">
          <base-button mode="outline">Refresh</base-button>
          <base-button v-if="!isRealtor" link to="/realtors/register"
            >Register as Realtor</base-button
          >
        </div>
        <ul v-if="hasRealtors">
          <realtor-item
            v-for="realtor in realtors"
            :id="realtor.id"
            :key="realtor.id"
            :name="realtor.name"
            :email="realtor.email"
            :desc="realtor.desc"
            :showDetailsLink=true
          ></realtor-item>
          
        </ul>
        <h3 v-else>No realtor available at the moment, check again later...</h3>
      </base-card>
    </section>
    <router-view></router-view>
  </template>
  
  <script>
  import RealtorItem from '../../components/realtors/RealtorItem.vue';
  
  
  export default {
    components: {
      RealtorItem,
    },
    computed: {
      realtors() {
        return this.$store.getters['realtors/realtors'];
      },
      hasRealtors() {
        return this.$store.getters['realtors/hasRealtors'];
      },
      isRealtor() {
        return this.$store.getters['realtors/isRealtor'];
      },
      
    },
  };
  </script>
  
  <style>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .controls {
    display: flex;
    justify-content: space-between;
  }
  </style>
  