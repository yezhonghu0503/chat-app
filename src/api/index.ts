import axios from 'axios';

const netAxios = axios.create({
  baseURL: 'http://43.156.237.21:8999',
  timeout: 5000,
});

// 请求拦截器
netAxios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    console.log(error);
  },
);

// 响应拦截器
netAxios.interceptors.response.use(
  config => {
    return config;
  },
  error => {
    console.log(error);
  },
);
export default netAxios;
