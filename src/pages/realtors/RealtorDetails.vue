<template>
  <section>
    <ul>
      <base-card>
        <realtor-item
          :id="realtor.id"
          :name="realtor.name"
          :email="realtor.email"
          :desc="realtor.desc"
        ></realtor-item>
      </base-card>
    </ul>
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
      </div>
      <h3>These houses are listed by {{ realtor.name }}</h3>
      <ul v-if="hasHouses">
        <house-item
          v-for="house in filteredHouses"
          :id="house.id"
          :key="house.id"
          :streetAdress="house.streetAdress"
          :city="house.city"
          :province="house.province"
          :realtorId="house.realtorId"
          :features="house.features"
          :price="house.price"
        ></house-item>
      </ul>
      <h3 v-else>No house available at the moment, check again later...</h3>
    </base-card>
  </section>
</template>

<script>
import RealtorItem from '../../components/realtors/RealtorItem.vue';
import HouseItem from '../../components/houses/HouseItem.vue';

export default {
  components: {
    RealtorItem,
    HouseItem,
  },
  data() {
    return {
      filteredHouses: [],
    };
  },
  computed: {
    realtor() {
      const realtorId = this.$route.params.id;
      const realtor = this.$store.getters['realtors/realtors'].find(
        (realtor) => realtor.id === realtorId
      );
      return realtor;
    },
    hasHouses() {
      return this.filteredHouses && this.filteredHouses.length > 0;
    },
  },
  created() {
    this.filteredHouses = this.fetchHouses();
  },
  methods: {
    fetchHouses() {
      const houses = this.$store.getters['houses/houses'];
      return houses.filter((house) => house.realtorId === this.realtor.id);
    },
  }
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
