import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      houses: [
        {
          id: 'h1',
          streetAdress: '166 highland',
          city: "st. catharines",
          province: "ON",
          price: '$2,000,000',
          area: '100m',
          realtorId: "r1",
          features: ['f1', 'f2', 'f3']
        },
        {
          id: 'h2',
          streetAdress: '3490 schmon',
          city: "st. catharines",
          province: "ON",
          price: '$10,000,000,000',
          area: '20000m',
          realtorId: "r2",
          features: ['f4']
        },
        {
          id: 'h3',
          streetAdress: '86 mcdonald',
          city: "st. catharines",
          province: "ON",
          price: '$1, 000,000',
          area: '100m',
          realtorId: "r1",
          features: ['f1', 'f3']
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
