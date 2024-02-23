import {configureStore, combineReducers} from '@reduxjs/toolkit';
import mutualReducer from './reducers/mutual';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// 定义持久化配置
const persistConfig = {
  key: 'root', // 你的redux状态存储在本地存储中的键名
  storage, // 选择存储引擎，默认使用AsyncStorage
};

const rootReducer = combineReducers({
  mutual: mutualReducer,
  // 有新的 slice 就往这里加
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store: any = configureStore({
  reducer: rootReducer,
});
