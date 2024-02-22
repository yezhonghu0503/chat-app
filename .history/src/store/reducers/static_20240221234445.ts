import {createSlice} from '@reduxjs/toolkit';

const staticSlice = createSlice({
  name: 'static',
  initialState: {
    isMenuStatus: false,
  },
  reducers: {
    openMenu: state => {
      state.isMenuStatus = true;
    },
  },
});

export default staticSlice.reducer;
