// User
import request from '@/utils/request';
import {
  UserLoginForm,
  UserLoginResponseData,
  UserInfoResponseData,
} from './type';

enum API {
  LOGIN_URL = '/admin/acl/index/login',
  USERINFO_URL = '/admin/acl/index/info',
  LOGOUT_URL = '/admin/acl/index/logout',
}

// Remember is when ()=> user {} need return or only ()=>

export const reqLogin = (data: UserLoginForm) =>
  request.post<any, UserLoginResponseData>(API.LOGIN_URL, data);

// Token is all ready in request header (function from @/utils/request.ts)
export const reqUserInfo = () =>
  request.get<any, UserInfoResponseData>(API.USERINFO_URL);

export const reqLogout = () => request.post<any, any>(API.LOGOUT_URL);
