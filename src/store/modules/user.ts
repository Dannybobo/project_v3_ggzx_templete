// pinia user

import { defineStore } from 'pinia';
import { reqLogin } from '@/api/user';
import type { loginForm, loginResponseData } from '@/api/user/type';
import { UserState } from './types/types';
import { GET_TOKEN, SET_TOKEN } from '@/utils/token';

import { constantRoute } from '@/router/routes';

export const useUserStore = defineStore('User', {
  state: (): UserState => {
    return {
      token: GET_TOKEN(),
      menuRoutes: constantRoute, // menus in slider
    };
  },
  actions: {
    async userLogin(data: loginForm) {
      const result: loginResponseData = await reqLogin(data);

      // 攔截器在這裏處理的是網路狀態，if 和 else 是依據 code 的業務邏輯
      if (result.code == 200) {
        this.token = result.data.token as string;
        SET_TOKEN(result.data.token as string);
        return 'ok';
      } else {
        /**
         * 只要有成功連到伺服器，并且有成功傳 response 回來，那 Promise 就會是成功的(fulfilled or reject都算)
         * 但 code 不等於 200 等於沒有登入成功，就必須讓 Promise 的結果是錯誤的(error)
         * 這樣回傳才能報錯（Error），讓組件知道并且展示錯誤訊息（把 message 塞進 Promise 一起傳回去）
         * （簡單説因爲 code 不對，所以强制把成功的 Promise 回傳成錯誤的方便調用的組件辨識結果）
         * （這裏回傳 reject，組件就可以 catch 到）
         */
        return Promise.reject(new Error(result.data.message));
      }
    },
  },
  getters: {},
});
