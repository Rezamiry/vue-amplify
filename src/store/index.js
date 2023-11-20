import {createStore} from "vuex";

import housesModule from "./modules/houses/index.js";
import realtorModule from "./modules/realtors/index.js";

const store = createStore({
    modules: {
        houses: housesModule,
        realtors: realtorModule
    },
    state() {
        return {
            userId: "r3"
        };
    },
    getters: {
        userId(state) {
            return state.userId;
        }
    }

})

export default store;