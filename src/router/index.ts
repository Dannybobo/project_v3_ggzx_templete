import { createRouter, createWebHashHistory } from 'vue-router';
import { constantRoute } from './routes';

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoute,
  scrollBehavier() {
    return {
      left: 0,
      top: 0,
    };
  },
});

export default router;
