<template>
    <form @submit.prevent="submitForm">
        <div class="form-control">
            <label for="email">Your email</label>
            <input type="email" id="email" v-model.trim="email">
        </div>
        <div class="form-control">
            <label for="bid">Bid</label>
            <input type="number" id="bid" v-model.number="bid">
        </div>

    <base-button>Offer</base-button>
    </form>
    </template>
    
    <script>
    export default {
        data() {
            return {
                email: "",
                bid: null,
            }
        },
        methods: {
            submitForm() {
                const formData = {
                   email: this.email,
                   bid: this.bid
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