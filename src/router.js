import { createRouter, createWebHistory} from 'vue-router';

import LayoutHome from './layouts/LayoutHome.vue';
import CanaisPages from './layouts/canaisLayout.vue';

const routes = [
  {
    path: '/',
    component: LayoutHome
  },
   {
    path: '/canal/:id',
    name: 'canal',
    component: CanaisPages
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
