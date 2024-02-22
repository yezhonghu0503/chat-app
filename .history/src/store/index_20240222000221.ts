import {configureStore} from '@reduxjs/toolkit';
// import mutual from './reducers';

const store: any = configureStore({
  reducer: mutual,
});

export default store;
