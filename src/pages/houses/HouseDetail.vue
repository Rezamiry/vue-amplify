<template>
  <section>
    <base-card>
      <h2>{{ fullAdress }}</h2>
      <h3>{{ price }}</h3>
      <base-badge
        v-for="feature in features"
        :key="feature"
        :type="feature"
        :title="feature"
      ></base-badge>
    </base-card>
  </section>
  <section>
    <base-card>
      <header>
        <h2>Interested? Place a bid!</h2>
        <base-button link :to="houseBidLink">Bid</base-button>
      </header>
      <router-view></router-view>
    </base-card>
  </section>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    fullAdress() {
        return this.selectedHouse.streetAdress + ", " + this.selectedHouse.city + ", " + this.selectedHouse.province;
    },
    price() {
        return this.selectedHouse.price;
    },
    features() {
        return this.selectedHouse.features;
    },
    houseBidLink() {
        return "/houses/" + this.selectedHouse.id + "/bid";
    }
  },
  data() {
    return {
      selectedHouse: null,
    };
  },
  created() {
    this.selectedHouse = this.$store.getters['houses/houses'].find(
      (house) => house.id === this.id
    );
  },
};
</script>
