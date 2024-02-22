import {createSlice} from '@reduxjs/toolkit';

const staticSlice = createSlice({
  name: 'static',
  initialState: {
    isMenuStatus: false,
  },
  reducers: {},
});

export default staticSlice.reducer;
