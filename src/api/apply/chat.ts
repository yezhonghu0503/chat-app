import netAxios from '../index';

type MessageContent = {
  role: string;
  content: string;
};

type ChatContent = {
  messages: Array<MessageContent>;
};

type ImageGenerator = {
  prompt: string;
};
export const postChatContent = (data: ChatContent) => {
  return netAxios.post('/chat/talks', data, {});
};

export const postImageGenerator = (data: ImageGenerator) => {
  return netAxios.post('/imageGenerator/generate', data, {});
};
