<template>
<form @submit.prevent="submitForm">
    <div class="form-control">
        <label for="streetAddress">Street Address</label>
        <input type="text" id="streetAddress" v-model.trim="streetAddress">
    </div>
    <div class="form-control">
        <label for="city">City</label>
        <input type="text" id="city" v-model.trim="city">
    </div>
    <div class="form-control">
        <label for="province">Province</label>
        <input type="text" id="province" v-model.trim="province">
    </div>
    <div class="form-control">
        <label for="price">Price</label>
        <input type="number" id="price" v-model.number="price">
    </div>
    <div class="form-control">
        <label for="area">Area</label>
        <input type="number" id="area" v-model.number="area">
    </div>
    <div class="form-control">
        <h3>Features</h3>
        <div>
            <input type="checkbox" id="f1" value="f1" v-model="features">
            <label for="f1">f1</label>
        </div>
        <div>
            <input type="checkbox" id="f2" value="f2" v-model="features">
            <label for="f2">f2</label>
        </div>
        <div>
            <input type="checkbox" id="f3" value="f3" v-model="features">
            <label for="f3">f3</label>
        </div>
        <div>
            <input type="checkbox" id="f4" value="f4" v-model="features">
            <label for="f4">f4</label>
        </div>
    </div>
<base-button>List</base-button>
</form>
</template>

<script>
export default {
    data() {
        return {
            streetAddress: "",
            city: "",
            province: "",
            price: null,
            area: null,
            features: []
        }
    },
    methods: {
        submitForm() {
            const formData = {
                streetAddress: this.streetAddress,
                city: this.city,
                province: this.province,
                price: this.price,
                area: this.area,
                features: this.features
            }
            console.log(formData)
        }
    }
}
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>