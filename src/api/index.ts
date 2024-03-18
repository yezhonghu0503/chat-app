import axios from 'axios';
import {store} from '../store/index';
import {failVerified} from '../store/reducers/account';
import {closeMenu} from '../store/reducers/mutual';

const netAxios = axios.create({
  baseURL: 'http://43.156.237.21:8999',
  timeout: 60 * 1000,
});

// 请求拦截器
netAxios.interceptors.request.use(
  config => {
    const token = store.getState().account.token;
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  error => {
    console.log(error);
  },
);

// 响应拦截器
netAxios.interceptors.response.use(
  config => {
    if (config.data.code && config.data.code === '400') {
      // store.dispatch(removeToken());
      store.dispatch(failVerified());
      store.dispatch(closeMenu());
    }
    return config;
  },
  error => {
    console.log(error);
  },
);
export default netAxios;
