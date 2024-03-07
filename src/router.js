import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './pages/AppHome.vue';
import ProfessionalList from './pages/ProfessionalList.vue';
import NotFound from './pages/NotFound.vue';
import ProfessionalDetail from './pages/ProfessionalDetail.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppHome,
    },
    {
      path: '/professionalList',
      name: 'professionalList',
      component: ProfessionalList,
    },
    {
      path: '/professionalDetail/:slug',
      name: 'ProfessionalDetail',
      component: ProfessionalDetail,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound,
    },
  ],
});

export { router };
