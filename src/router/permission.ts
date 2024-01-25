import router from './index';
import setting from '@/setting';
import { useUserStore } from '@/store/modules/user';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';

nprogress.configure({
  showSpinner: false,
});

router.beforeEach(async (to: any, from: any, next: any) => {
  document.title = 'Loading...';
  nprogress.start();

  let userStore = useUserStore();

  let token = userStore.token;
  let username = userStore.username;
  if (token) {
    if (to.path == '/login') {
      next(false);
    } else {
      if (username) {
        // Check userinfo is exist or not
        next();
      } else {
        try {
          await userStore.getUserInfo();
          next();
        } catch (error) {
          // token expire
          // user manually changed the token in localstorage
          // logout and clear user info
          await userStore.userLogout();
          next({ path: '/login', query: { redirect: to.path } });
        }
      }
    }
  } else {
    if (to.path == '/login') {
      next();
    } else {
      next({ path: '/login', query: { redirect: to.path } });
    }
  }
});

router.afterEach((to: any, from: any) => {
  document.title = `${setting.title} - ${to.meta.title}`;
  nprogress.done();
});
