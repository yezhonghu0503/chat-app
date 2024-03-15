import React, {useEffect, useState} from 'react'; // useState, useEffect
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {openMenu} from '../../store/reducers/mutual';
// import {
//   // addChatContents,
//   removeChatContents,
// } from '../../store/reducers/loaclData';
// import {failVerified, removeToken} from '../../store/reducers/account';
import {
  editChatContent,
  removeChatContents,
} from '../../store/reducers/loaclData';
import Markdown from 'react-native-markdown-display';
import CodeHighlighter from 'react-native-code-highlighter';
import {atomOneDarkReasonable} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {chatBoxstyles as styles} from './chatBoxStyles';
import {clearTempChatContentBuffer} from '../../store/reducers/buffer';

const ChatBox = () => {
  const {menuStatus} = useSelector((state: any) => state.mutual);
  const {isVerified} = useSelector((state: any) => state.account);
  const chatMessages = useSelector((state: any) => state.local.chatContents);
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
  // const [text, setText] = useState('');
  // const delay = 50;
  // const copy =
  //   "在JavaScript中，使用axios库发送一个POST请求是一个简单且常见的任务。axios是一个基于Promise的HTTP客户端，适用于node.js和浏览器。以下是如何使用axios发送一个POST请求的基本示例：\n\n首先，确保你已经安装了axios。如果你还没有安装，可以使用npm或yarn来安装它。\n\n使用npm:\n```bash\nnpm install axios\n```\n\n使用yarn:\n```bash\nyarn add axios\n```\n\n安装完成后，你可以在你的代码中这样使用axios:\n\n```javascript\nconst axios = require('axios');\n\n// 设置POST请求的Body数据\nconst postData = {\n    key1: 'value1',\n    key2: 'value2'\n};\n\n// 设置请求的配置参数，例如URL、请求头等\nconst config = {\n    headers: {\n        'Content-Type': 'application/json' // 如果你发送JSON数据\n        // 'Content-Type': 'application/x-www-form-urlencoded' // 如果你发送表单数据\n    }\n};\n\n// 使用axios发送POST请求\naxios.post('http://example.com/api/endpoint', postData, config)\n    .then((response) => {\n        // 处理响应成功的情况\n        console.log('Response data:', response.data);\n    })\n    .catch((error) => {\n        // 处理响应失败的情况\n        console.error('Error:', error);\n    });\n```\n\n在上面的代码中，`postData`变量包含了你希望发送到服务器的数据，而`config`对象包含了任何特定的请求配置，如请求头。`axios.post`的第一个参数是目标URL，第二个参数是要发送的数据，第三个参数是请求的配置。\n\n如果你使用 的是ES6或者更高版本的JavaScript，你可能希望使用`async/await`语法来发送请求，这能让你的异步代码更加清晰和简洁。下面是使用`async/await`的例子:\n\n```javascript\nconst axios = require('axios');\n\nasync function sendPostRequest() {\n    const postData = {\n        key1: 'value1',\n        key2: 'value2'\n    };\n    \n    const config = {\n        headers: {\n            'Content-Type': 'application/json'\n        }\n    };\n\n    try {\n        const response = await axios.post('http://example.com/api/endpoint', postData, config);\n        console.log('Response data:', response.data);\n    } catch (error) {\n        console.error('Error:', error);\n    }\n}\n\nsendPostRequest();\n```\n\n在上面的例子中，`sendPostRequest`函数被标记为`async`，这使得你可以在函数内部使用`await`关键词。`await`会暂停代码执行，直到`axios.post`解析完Promise，然后你可以处理响应或捕获错误。";
  const flowOutputMd = (content: string, delay: number) => {
    let index = 0;
    const intervalId = setInterval(() => {
      setChatContentBuffer(content.substring(0, index)); // 从原始文本中截取已输出的部分
      index += 4;
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
                // TODO 回复自动滚动到底部
                initialNumToRender={30}
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
                          source={require('../synthetical/img/avatar.png')}
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
                    source={require('../synthetical/img/logo.png')}
                  />
                  <Text style={styles.helpTips}>How can I help you today?</Text>
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
  );
};

export default ChatBox;
