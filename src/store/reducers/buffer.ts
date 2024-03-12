import {createSlice} from '@reduxjs/toolkit';

const locallSlice = createSlice({
  name: 'buffer',
  initialState: {
    tempChatContentBuffer: '',
  },
  reducers: {
    addTempChatContentBuffer: (state: any, actions) => {
      state.tempChatContentBuffer = actions.payload;
    },
    clearTempChatContentBuffer: (state: any) => {
      state.tempChatContentBuffer = '';
    },
  },
});

export const {addTempChatContentBuffer, clearTempChatContentBuffer} =
  locallSlice.actions;
export default locallSlice.reducer;
