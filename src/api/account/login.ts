import netAxios from 'api';

type User = {
  passphrase: string;
};

// 登录状态
export const getUserStatus = () => {
  return netAxios.get('/api/getUserStatus', {});
};
// 用户校验
export const postUserVerify = (data: User) => {
  return netAxios.post('/chat/talks', data, {});
};
