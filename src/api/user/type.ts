// user ts types
// user login request
export interface UserLoginForm {
  username: string;
  password: string;
}

// all api response data type
export interface ResponseData {
  code: number;
  message: string;
  ok: boolean;
}

//  user login response data type
export interface UserLoginResponseData extends ResponseData {
  data: string;
}

// user info response data type
export interface UserInfoResponseData extends ResponseData {
  data: {
    routes: string[];
    buttons: string[];
    roles: string[];
    name: string;
    avatar: string;
  };
}
