import {createSlice} from '@reduxjs/toolkit';

const accountSlice = createSlice({
  name: 'mutual',
  initialState: {
    isVerified: false,
    token: '',
  },
  reducers: {
    succeedVerified: state => {
      state.isVerified = true;
    },
    failVerified: state => {
      state.isVerified = false;
    },
    addToken: (state: any, actions) => {
      state.token = actions.payload;
    },
    removeToken: (state: any) => {
      state.token = '';
    },
  },
});

export const {succeedVerified, failVerified, addToken, removeToken} =
  accountSlice.actions;
export default accountSlice.reducer;
