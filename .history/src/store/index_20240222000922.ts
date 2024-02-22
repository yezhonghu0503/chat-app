import {configureStore} from '@reduxjs/toolkit';
import mutualReducer from './reducers/mutual';

const store: any = configureStore({
  reducer: mutualReducer,
});

export default store;
