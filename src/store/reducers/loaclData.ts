import {createSlice} from '@reduxjs/toolkit';

const locallSlice = createSlice({
  name: 'local',
  initialState: {
    chatContents: [],
  },
  reducers: {
    addChatContents: (state: any, actions) => {
      return {
        ...state,
        chatContents: [...state.chatContents, actions.payload],
      };
    },
    removeChatContents: (state: any) => {
      state.chatContents.pop();
    },
  },
});

export const {addChatContents, removeChatContents} = locallSlice.actions;
export default locallSlice.reducer;
