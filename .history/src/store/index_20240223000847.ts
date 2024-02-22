import {configureStore, combineReducers} from '@reduxjs/toolkit';
import mutualReducer from './reducers/mutual';

const rootReducer = combineReducers({
  mutual: mutualReducer,
  // 有新的 slice 就往这里加
});
export const store: any = configureStore({
  reducer: rootReducer,
});
