import axios from 'axios';
import { ElMessage } from 'element-plus';
import { useUserStore } from '@/store/modules/user';

const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000,
});

request.interceptors.request.use((config) => {
  const userStore = useUserStore();
  if (userStore.token) {
    config.headers.token = userStore.token;
  }
  return config;
});

request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    let message = '';
    const status = error.response.status;
    switch (status) {
      case 401:
        message = 'Token over limit time';
        break;
      case 403:
        message = 'Access denied';
        break;
      case 404:
        message = 'URL error';
        break;
      case 500:
        message = 'Server error';
        break;
      default:
        message = 'Network error';
        break;
    }
    ElMessage({
      type: 'error',
      message,
    });
    return Promise.reject(error);
  },
);

export default request;
