import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      realtors: [
        {
          "id": "r1",
          "name": "Reza Miry",
          "email": "example@gmail.com",
          "desc": "I am a very good realtor"
        },
        {
          "id": "r2",
          "name": "Neshaat Miry",
          "email": "example@gmail.com",
          "desc": "I am even better"
        }
      ]
    }
  },
  mutations,
  actions,
  getters  
};