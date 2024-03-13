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
    editChatContent: (state: any, actions) => {
      const len = state.chatContents.length - 1;
      if (state.chatContents[len].content === '') {
        state.chatContents[len].content = actions.payload;
      }
    },
  },
});

export const {addChatContents, removeChatContents, editChatContent} =
  locallSlice.actions;
export default locallSlice.reducer;
