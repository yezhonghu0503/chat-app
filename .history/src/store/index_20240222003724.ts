import {configureStore, combineReducers} from '@reduxjs/toolkit';
import mutualReducer from './reducers';

const rootReducer = combineReducers({
  counter: mutualReducer,
  // 有新的 slice 就往这里加
});
const store: any = configureStore({
  reducer: rootReducer,
});

export default store;
