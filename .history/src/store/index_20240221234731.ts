import {configureStore} from '@reduxjs/toolkit';
import _static from './reducers/static';

const store: any = configureStore({
  reducer: _static,
});

export default store;
