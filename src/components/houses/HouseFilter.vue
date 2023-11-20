<template>
  <base-card>
    <h2>Find Your House</h2>
    <span class="filter-option">
      <input type="checkbox" id="f1" checked @change="setFilter" />
      <label for="f1">f1</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="f2" checked @change="setFilter" />
      <label for="f2">f2</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="f3" checked @change="setFilter" />
      <label for="f3">f3</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="f4" checked @change="setFilter" />
      <label for="f4">f4</label>
    </span>
  </base-card>
</template>

<script>
export default {
  emits: ['change-filter'],
  data() {
    return {
      filters: {
        f1: true,
        f2: true,
        f3: true,
        f4: true,
      },
    };
  },
  methods: {
    setFilter(event) {
      const inputId = event.target.id;
      const isActive = event.target.checked;
      const updatedFilters = {
        ...this.filters,
        [inputId]: isActive,
      };
      this.filters = updatedFilters;
      this.$emit('change-filter', updatedFilters);
    },
  },
};
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>
