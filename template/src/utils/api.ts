import axios from 'axios';
import Config from 'react-native-config';

export const api = axios.create({
  baseURL: Config.API_URL_AMS,
});

api.interceptors.response.use(
  (response: any) => {
    return Promise.resolve(response?.data);
  },
  error => {
    console.log(
      '\n\n📛 Error on Axios22222: \n_____\n\n',
      JSON.stringify({
        message: error.message,
        code: error.code,
        status: error.status,
        baseURL: error.config.baseURL,
        url: error.config.url,
        method: error.config.method,
        data: error.config.data,
      }),
    );
    return Promise.reject(error);
  },
);

api.interceptors.request.use((config: any) => {
  const token = '';
  config.headers = {
    Authorization: token ? `Bearer ${token}` : '',
  };
  return config;
});