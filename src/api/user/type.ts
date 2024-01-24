// Login request data type
export interface loginForm {
  username: string;
  password: string;
}

// Login response data type
interface loginDataType {
  token?: string;
  message?: string;
}
export interface loginResponseData {
  code: number;
  data: loginDataType;
}

interface userInfo {
  userId: number;
  avatar: string;
  username: string;
  password: string;
  desc: string;
  roles: string[];
  buttons: string[];
  routes: string[];
  token: string;
}
// Server response user data type
interface userDataType {
  checkUser: userInfo;
}
export interface userResponseData {
  code: number;
  data: userDataType;
}
