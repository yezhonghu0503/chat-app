import {createSlice} from '@reduxjs/toolkit';

const locallSlice = createSlice({
  name: 'local',
  initialState: {
    chatContents: [
      {
        key: 1,
        role: 'system',
        content: `# Heading 1

           ## Heading 2

           This is some **bold** and *italic* text.
           
           \`\`\` function helloWorld() { console.log("Hello, world!");  } \`\`\`
           `,
      },
    ],
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
