import React, {useEffect, useRef} from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import SyntheticalBar from './synthetical/SyntheticalBar';
import ChatBox from './chatbox/chatBox';
import {useSelector} from 'react-redux';

const FlexDimensionsBasics = () => {
  const menuStatus = useSelector((state: any) => state.mutual.isMenuStatus);
  const chatBoxHeight: any = useRef(new Animated.Value(2)).current;
  useEffect(() => {
    Animated.timing(chatBoxHeight, {
      toValue: menuStatus ? 8 : 2,
      duration: 10000,
      useNativeDriver: false,
    }).start();
    console.log(chatBoxHeight);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menuStatus]);
  const styles = StyleSheet.create({
    globalBox: {
      flex: 1,
      backgroundColor: '#412db1',
    },
    chatBox: {
      // flex: 8,
      flex: chatBoxHeight,
      backgroundColor: '#f7f7f8',
      margin: 6,
      borderRadius: 35,
    },
    syntheticalBox: {
      flex: menuStatus ? 1 : 3,
    },
  });
  return (
    <View style={styles.globalBox}>
      <Animated.View style={styles.chatBox}>
        <ChatBox />
      </Animated.View>
      <View style={styles.syntheticalBox}>
        <SyntheticalBar />
      </View>
    </View>
  );
};

export default FlexDimensionsBasics;
