import {configureStore, combineReducers} from '@reduxjs/toolkit';
import mutualReducer from './reducers/mutual';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

// 定义持久化配置
const persistConfig = {
  key: 'root', // 你的redux状态存储在本地存储中的键名
  storage: AsyncStorage, // 选择存储引擎，默认使用AsyncStorage
};

const rootReducer = combineReducers({
  mutual: mutualReducer,
  // 有新的 slice 就往这里加
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store: any = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
