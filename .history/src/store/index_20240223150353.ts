import {configureStore, combineReducers} from '@reduxjs/toolkit';
import mutualReducer from './reducers/mutual';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  mutual: mutualReducer,
  // 有新的 slice 就往这里加
});
export const store: any = configureStore({
  reducer: rootReducer,
});
