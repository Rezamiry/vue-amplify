import { createRouter, createWebHistory } from 'vue-router';

import HousesList from './pages/houses/HousesList.vue';
import HouseDetail from './pages/houses/HouseDetail.vue';
import HousesRegister from './pages/houses/HouseRegister.vue';
import HouseBid from './pages/houses/HouseBid.vue';
import RelatorsList from './pages/realtors/RealtorsList.vue';
import RealtorDetails from './pages/realtors/RealtorDetails.vue';
import RealtorRegister from './pages/realtors/RealtorRegister.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/houses' },
    { path: "/realtors/houses/:id", redirect: {name: "houseDetails"}},
    { path: '/houses', component: HousesList },
    {
      path: '/houses/:id',
      component: HouseDetail,
      props: true,
      name: "houseDetails",
      children: [{ path: 'bid', component: HouseBid }],
    },
    { path: '/realtors', component: RelatorsList },

    { path: '/realtors/register', component: RealtorRegister },
    {
      path: '/realtors/:id',
      component: RealtorDetails,
      children: [{ path: 'register-house', component: HousesRegister }],
    },
    
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

export default router;
