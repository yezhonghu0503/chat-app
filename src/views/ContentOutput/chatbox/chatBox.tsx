import React, {useEffect, useRef, useState} from 'react'; // useState, useEffect
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {openMenu} from '../../../store/reducers/mutual';
import {
  editChatContent,
  removeChatContents,
} from '../../../store/reducers/loaclData';
import Markdown from 'react-native-markdown-display';
import CodeHighlighter from 'react-native-code-highlighter';
import {atomOneDarkReasonable} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {chatBoxstyles as styles} from './chatBoxStyles';
import {clearTempChatContentBuffer} from '../../../store/reducers/buffer';
import InputTerminal from './components/InputTerminal';

const ChatBox = () => {
  const {menuStatus} = useSelector((state: any) => state.mutual);
  const {isVerified} = useSelector((state: any) => state.account);
  const chatMessages = useSelector((state: any) => state.local.chatContents);
  const flatListRef: any = useRef();
  const tempChatContentBuffer = useSelector(
    (state: any) => state.buffer.tempChatContentBuffer,
  );
  const [chatContentBuffer, setChatContentBuffer] = useState<string>('');
  const dispatch = useDispatch();
  const chatMarkdown = {
    text: {
      color: 'white',
      fontSize: 16,
    },
    fence: {
      borderColor: 'rgb(39,43,53)',
      backgroundColor: 'rgb(39,43,53)',
    },
    code_inline: {
      color: 'white',
      backgroundColor: 'rgb(39,43,53)',
    },
    list_item: {
      color: 'white',
    },
  };
  const flowOutputMd = (content: string, delay: number) => {
    let index = 0;
    const intervalId = setInterval(() => {
      setChatContentBuffer(content.substring(0, index)); // 从原始文本中截取已输出的部分
      // 跟踪内容滚动
      if (flatListRef.current) {
        flatListRef.current.scrollToIndex({
          index: chatMessages.length - 1,
          animated: true,
        });
      }
      index += 6;
      if (index > content.length) {
        clearInterval(intervalId); // 文本输出完毕，清除定时器
        dispatch(editChatContent(content));
        dispatch(clearTempChatContentBuffer());
        setChatContentBuffer('');
      }
    }, delay);
  };
  useEffect(() => {
    // 构建缓冲区
    // store先构建一个空字符content
    // FlatList检测空字符后触发缓冲区
    // useEffect检测空字符content，往缓冲区中动态填充字符，等缓冲区完成字符填充，再调用action更新内容
    if (chatMessages.length && !chatMessages[chatMessages.length - 1].content) {
      flowOutputMd(tempChatContentBuffer, 50);
      // console.log(tempChatContentBuffer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tempChatContentBuffer]);
  useEffect(() => {
    if (
      chatMessages[chatMessages.length - 1].content === '' &&
      flatListRef.current
    ) {
      flatListRef.current.scrollToEnd({animated: true});
    }
  }, [chatMessages]);
  // react-native-markdown-display 自定义代码块
  const rules = {
    // eslint-disable-next-line react/no-unstable-nested-components
    fence: (
      node: any,
      _children: any,
      _parent: any,
      // eslint-disable-next-line @typescript-eslint/no-shadow
      styles: any,
      inheritedStyles: any = {},
    ) => {
      // we trim new lines off the end of code blocks because the parser sends an extra one.
      let {content} = node;
      if (
        typeof node.content === 'string' &&
        node.content.charAt(node.content.length - 1) === '\n'
      ) {
        content = node.content.substring(0, node.content.length - 1);
      }
      return (
        <ScrollView
          horizontal={true}
          key={node.key}
          style={[inheritedStyles, styles.fence]}>
          <Text>
            <CodeHighlighter
              hljsStyle={atomOneDarkReasonable}
              // textStyle={{width: '100%'}}
              // scrollViewProps={{contentContainerStyle: {width: 300}}}
              language="typescript">
              {content}
            </CodeHighlighter>
          </Text>
        </ScrollView>
      );
    },
  };
  return (
    <View style={styles.main}>
      <View style={styles.chatbox}>
        {isVerified ? (
          <View style={styles.chatTouch}>
            <View style={styles.chatHearder}>
              <Text style={styles.chatHearderText}>GPT-4 Turbo</Text>
              <Image
                style={styles.chatHearderImage}
                source={require('./img/menu.png')}
              />
            </View>
            <View style={styles.initalPage}>
              {chatMessages.length ? (
                <FlatList
                  initialNumToRender={30}
                  ref={flatListRef}
                  // style={styles.flatList}
                  // onContentSizeChange={() =>
                  //   flatListRef.current.scrollToEnd({animated: true})
                  // }
                  data={chatMessages}
                  renderItem={({item, index}) => {
                    return (
                      <View
                        key={index}
                        style={{
                          ...styles.chatUser,
                        }}>
                        <View
                          style={{
                            ...styles.chatUserTit,
                          }}>
                          <Image
                            style={styles.chatUserAva}
                            source={require('../../synthetical/img/avatar.png')}
                          />
                          {}
                          <Text
                            // eslint-disable-next-line react-native/no-inline-styles
                            style={{
                              color: 'white',
                            }}>
                            {item.role === 'user' ? '你' : 'ChatGPT'}
                          </Text>
                        </View>
                        {item.role === 'user' ? (
                          // eslint-disable-next-line react-native/no-inline-styles
                          <Text style={{color: 'white', fontSize: 16}}>
                            {item.content}
                          </Text>
                        ) : (
                          <Markdown rules={rules} style={chatMarkdown}>
                            {index === chatMessages.length - 1 &&
                            item.content === ''
                              ? `${chatContentBuffer} 🛸`
                              : item.content}
                          </Markdown>
                        )}
                        <View style={styles.itemAction}>
                          <Image
                            style={styles.itemDelete}
                            source={require('./img/refresh.png')}
                          />
                          <TouchableOpacity
                            onPress={() => {
                              dispatch(removeChatContents());
                            }}>
                            <Image
                              style={styles.itemDelete}
                              source={require('./img/delete.png')}
                            />
                          </TouchableOpacity>
                        </View>
                      </View>
                    );
                  }}
                />
              ) : (
                <ScrollView>
                  <View style={styles.initalHelp}>
                    <Image
                      style={styles.initalHelpLogo}
                      source={require('../../synthetical/img/logo.png')}
                    />
                    <Text style={styles.helpTips}>
                      How can I help you today?
                    </Text>
                  </View>
                </ScrollView>
              )}
            </View>
            <TouchableOpacity
              style={styles.chatTouchReturn}
              onPress={() => {
                dispatch(openMenu());
                // dispatch(removeToken());
                // dispatch(failVerified());
                // flowOutputMd();
              }}>
              <Image
                style={styles.chatTouchReturnPic}
                borderRadius={15}
                source={require('./img/remove.png')}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <Image
            source={require('./img/bg.png')}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              ...styles.loginBackground,
              display: menuStatus ? 'none' : undefined,
            }}
          />
        )}
      </View>
      <InputTerminal />
    </View>
  );
};

export default ChatBox;
