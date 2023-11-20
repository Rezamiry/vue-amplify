<template>
    <li>
      <h3>{{ name }}</h3>
        <h4> {{ email }}</h4>
        <p>{{ desc }}</p>
        <router-link v-if="showDetailsLink" :to="realtorDetailsLink">See more details</router-link>
    </li>
</template>

<script>
export default {
    props: ['id', 'name', "email", "desc","showDetailsLink"],
    computed: {
      realtorDetailsLink() {
        return "/realtors/" + this.id;
      },

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