import { createRouter, createWebHistory} from 'vue-router';

import LayoutHome from './layouts/LayoutHome.vue';
import ApresentadorPage from './layouts/layoutApresentadores.vue';

const routes = [
  {
    path: '/',
    component: LayoutHome
  },
   {
    path: '/apresentador/:id',
    name: 'Apresentador',
    component: ApresentadorPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 100);

    return false; 
  }
});


export default router;
