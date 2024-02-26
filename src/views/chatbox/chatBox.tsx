import React from 'react'; // useState, useEffect
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {openMenu} from '../../store/reducers/mutual';
// import {
//   addChatContents,
//   removeChatContents,
// } from '../../store/reducers/loaclData';
import Markdown from 'react-native-markdown-display';
import CodeHighlighter from 'react-native-code-highlighter';
import {atomOneDarkReasonable} from 'react-syntax-highlighter/dist/esm/styles/hljs';
// import axios from 'axios';

const ChatBox = () => {
  const menuStatus = useSelector((state: any) => state.mutual.isMenuStatus);
  const chatMessages = useSelector((state: any) => state.local.chatContents);
  const dispatch = useDispatch();
  const styles = StyleSheet.create({
    main: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    loginBackground: {
      flex: 1,
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      borderRadius: 35,
      display: menuStatus ? 'none' : undefined,
    },
    chatTouch: {
      flex: 1,
      //   marginLeft: 10,
      //   paddingLeft: 10,
      //   paddingRight: 10,
    },
    chatHearder: {
      width: '100%',
      height: 60,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderTopLeftRadius: 35,
      borderTopRightRadius: 35,
      //   backgroundColor: 'white',
    },
    chatHearderText: {
      fontSize: 18,
      marginLeft: 15,
      fontWeight: '800',
      color: 'white',
    },
    chatHearderImage: {
      width: 20,
      height: 20,
      marginRight: 15,
    },
    initalPage: {
      flex: 1,
      justifyContent: 'space-between',
    },
    initalHelp: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 100,
    },
    initalHelpLogo: {
      width: 40,
      height: 40,
    },
    helpTips: {
      color: 'white',
      marginTop: 10,
    },

    chatTouchReturn: {
      width: Dimensions.get('window').width,
      alignItems: 'center',
    },
    chatTouchReturnPic: {
      width: 50,
      height: 30,
    },
    chatUser: {
      width:
        Dimensions.get('window').width - Dimensions.get('window').width * 0.1,
      marginLeft: 10,
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 5,
      paddingLeft: 10,
      paddingBottom: 10,
      marginTop: 15,
    },
    chatUserTit: {
      flex: 1,
      height: 35,
      alignItems: 'center',
      flexDirection: 'row',
    },
    chatUserAva: {
      width: 30,
      height: 30,
      borderRadius: 10,
      marginRight: 5,
    },
    codeContainer: {
      padding: 16,
      minWidth: '100%',
    },
    text: {
      fontSize: 16,
    },
  });
  const chatMarkdown = {
    text: {
      color: 'white',
    },
  };
  // const [text, setText] = useState('');
  // const originalText = `# Heading 1

  // ## Heading 2

  // This is some **bold** and *italic* text.

  // \`\`\` function helloWorld() { console.log("Hello, world!");  } \`\`\`

  // `;
  // const delay = 50; // 输出间隔时间

  // useEffect(() => {
  //   let index = 0;
  //   const intervalId = setInterval(() => {
  //     setText(originalText.substring(0, index)); // 从原始文本中截取已输出的部分
  //     index += 4;

  //     if (index > originalText.length) {
  //       clearInterval(intervalId); // 文本输出完毕，清除定时器
  //     }
  //   }, delay);

  //   return () => {
  //     clearInterval(intervalId); // 组件卸载时清除定时器
  //   };
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  const renderCodeBlock = ({value}: any) => {
    console.log(value);
    return (
      <CodeHighlighter
        hljsStyle={atomOneDarkReasonable}
        containerStyle={styles.codeContainer}
        textStyle={styles.text}
        language="typescript">
        {value}
      </CodeHighlighter>
    );
  };
  return (
    <View style={styles.main}>
      {/* <Image
          source={require('./img/bg.png')}
          style={styles.loginBackground}
        /> */}
      <View style={styles.chatTouch}>
        <View style={styles.chatHearder}>
          <Text style={styles.chatHearderText}>GPT-4 Turbo</Text>
          <Image
            style={styles.chatHearderImage}
            source={require('./img/menu.png')}
          />
        </View>
        <View style={styles.initalPage}>
          {/* <View style={styles.initalHelp}>
            <Image
              style={styles.initalHelpLogo}
              source={require('../synthetical/img/logo.png')}
            />
            <Text style={styles.helpTips}>How can I help you today?</Text>
          </View> */}
          <FlatList
            data={chatMessages}
            renderItem={({item}) => (
              <View
                key={item.key}
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  ...styles.chatUser,
                  backgroundColor: item.role === 'user' ? 'white' : '#171718',
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
                    style={{color: item.role === 'user' ? 'black' : 'white'}}>
                    {item.role === 'user' ? '你' : 'ChatGPT'}
                  </Text>
                </View>
                {/* <View style={{color: item.role === 'user' ? '' : 'white'}}> */}
                <Markdown
                  rules={{
                    code_block: renderCodeBlock,
                  }}
                  style={chatMarkdown}>
                  {item.content}
                </Markdown>
                {/* <RenderHtml contentWidth={300} source={{html: htmlContent}} /> */}
                {/* </View> */}
              </View>
            )}
          />
        </View>
        <TouchableOpacity
          style={styles.chatTouchReturn}
          onPress={() => {
            dispatch(openMenu());
            // dispatch(removeChatContents());
            // console.log(chatMessages);
            // const headers = {
            //   ContentType: 'application/json', // 设置 Content-Type 为 JSON
            //   Authorization:
            //     'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imh1Z2llZ2llIiwiaWF0IjoxNzA4OTY0OTI5LCJleHAiOjE3MDg5Njg1Mjl9.JWFgKCmHy4NwX3-CWYGgaYhhzsVjylXoMwX_dV-aAa4', // 设置 Authorization 头，如果需要的话
            // };
            // const data = {
            //   messages: [
            //     {
            //       role: 'user',
            //       content: 'axios发送一个post请求',
            //     },
            //   ],
            // };
            // axios
            //   .post('http://43.156.237.21:8999/chat/talks', data, headers)
            //   .then(res => {
            //     console.log(res.data);
            //   })
            //   .catch(err => {
            //     console.log(err);
            //   });
          }}>
          <Image
            style={styles.chatTouchReturnPic}
            borderRadius={15}
            source={require('./img/remove.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatBox;
