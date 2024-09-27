import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import DestinationDetail from '../views/DestinationDetailView.vue';
import NotFound from '../views/NotFoundView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/destination/:id',
      name: 'DestinationDetail',
      component: DestinationDetail,
      props: true,
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound,
    },
  ],
});

export default router;

