<template>
    <li>
        <h3>{{ fullAdress }}</h3>
        <h4> {{ price }}</h4>
        <div>
            <base-badge v-for="feature in features" :key="feature" :type="feature" :title="feature"></base-badge>
        </div>
        <div class="actions">
            <base-button link :to="houseDetailLink">View Details</base-button>
            <base-button link :to="houseRealtorLink">See Realtor Information</base-button>
        </div>
    </li>
</template>

<script>
export default {
    props: ['id', 'streetAdress', "city", "province", 'price', 'realtorId', "features"],
    computed: {
        fullAdress() {
            return this.streetAdress + ", " + this.city + ", " + this.province;
        },
        houseDetailLink() {
            return "houses/" + this.id;
            
        },
        houseRealtorLink() {
            return  "/realtors/" + this.realtorId;
        }
    }
}

</script>


<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>