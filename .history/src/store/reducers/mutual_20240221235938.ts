import {createSlice} from '@reduxjs/toolkit';

const mutualSlice = createSlice({
  name: 'static',
  initialState: {
    isMenuStatus: false,
  },
  reducers: {
    openMenu: state => {
      state.isMenuStatus = true;
    },
    closeMenu: state => {
      state.isMenuStatus = false;
    },
  },
});

export const {openMenu, closeMenu} = mutualSlice.actions;
export default mutualSlice.reducer;
