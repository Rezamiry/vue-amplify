<template>
  <span class="badge" :class="type">
    {{ text }}
  </span>
</template>

<script>
export default {
    props: ["type", "title"],
    computed: {
        text() {
            return this.title.toUpperCase();
        }
    }
}
</script>

<style scoped>
.badge {
  background-color: #ccc;
  color: #252525;
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin-right: 0.5rem;
}

.f1 {
  background-color: #3d008d;
  color: white;
}

.f2 {
  background-color: #71008d;
  color: white;
}

.f3 {
  background-color: #8d006e;
  color: white;
}

.f4 {
  background-color: #788d00;
  color: white;
}
</style>