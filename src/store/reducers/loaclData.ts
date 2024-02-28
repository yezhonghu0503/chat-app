import {createSlice} from '@reduxjs/toolkit';

const locallSlice = createSlice({
  name: 'local',
  initialState: {
    chatContents: [],
  },
  reducers: {
    addChatContents: (state: any, actions) => {
      state.chatContents.push(actions.payload);
    },
    removeChatContents: (state: any) => {
      state.chatContents.pop();
    },
  },
});

export const {addChatContents, removeChatContents} = locallSlice.actions;
export default locallSlice.reducer;
