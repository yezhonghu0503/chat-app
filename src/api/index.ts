import axios from 'axios';
import {store} from '../store/index';
import {failVerified, removeToken} from '../store/reducers/account';
import {closeMenu} from '../store/reducers/mutual';
const state = store.getState();
const netAxios = axios.create({
  baseURL: 'http://43.156.237.21:8999',
  timeout: 60 * 1000,
  headers: {
    Authorization: `Bearer ${state.account.token}`,
  },
});

// 请求拦截器
netAxios.interceptors.request.use(
  config => {
    console.log(config);
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
      store.dispatch(removeToken());
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
