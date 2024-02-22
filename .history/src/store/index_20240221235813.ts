import {configureStore} from '@reduxjs/toolkit';
import static from './reducers/static';

const store: any = configureStore({
  reducer: static,
});

export default store;
