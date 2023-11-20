<template>
  <section>
    <house-filter @change-filter="setFilters"></house-filter>
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button link to="/realtors/register"
          >Register as Realtor</base-button
        >
      </div>
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
  <router-view></router-view>
</template>

<script>
import HouseItem from '../../components/houses/HouseItem.vue';
import HouseFilter from '../../components/houses/HouseFilter.vue';

export default {
  components: {
    HouseItem,
    HouseFilter,
  },
  data() {
    return {
      activeFilters: {
        f1: true,
        f2: true,
        f3: true,
        f4: true,
      },
    };
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
  },
  computed: {
    filteredHouses() {
      const houses = this.$store.getters['houses/houses'];
      return houses.filter((house) => {
        if (this.activeFilters.f1 && house.features.includes('f1')) {
          return true;
        }
        if (this.activeFilters.f2 && house.features.includes('f2')) {
          return true;
        }
        if (this.activeFilters.f3 && house.features.includes('f3')) {
          return true;
        }
        if (this.activeFilters.f4 && house.features.includes('f4')) {
          return true;
        }
        return false;
      });
    },
    hasHouses() {
      return this.$store.getters['houses/hasHouses'];
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
