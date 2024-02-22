import {configureStore} from '@reduxjs/toolkit';
import mutualReducer from './reducers';

const store: any = configureStore({
  reducer: mutualReducer,
});

export default store;
