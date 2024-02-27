import {createSlice} from '@reduxjs/toolkit';

const mutualSlice = createSlice({
  name: 'mutual',
  initialState: {
    isMenuStatus: false,
    isVerified: false,
  },
  reducers: {
    openMenu: state => {
      state.isMenuStatus = true;
    },
    closeMenu: state => {
      state.isMenuStatus = false;
    },
    succeedVerified: state => {
      state.isVerified = true;
    },
    failVerified: state => {
      state.isVerified = false;
    },
  },
});

export const {openMenu, closeMenu, succeedVerified, failVerified} =
  mutualSlice.actions;
export default mutualSlice.reducer;
