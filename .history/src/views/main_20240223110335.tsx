import React, {useEffect, useRef} from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import SyntheticalBar from './synthetical/SyntheticalBar';
import ChatBox from './chatbox/chatBox';
import {useSelector} from 'react-redux';

const FlexDimensionsBasics = () => {
  const menuStatus = useSelector((state: any) => state.mutual.isMenuStatus);
  const chatBoxFlex: any = useRef(new Animated.Value(30)).current;
  useEffect(() => {
    Animated.timing(chatBoxFlex, {
      toValue: menuStatus ? 80 : 30,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    console.log(chatBoxFlex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menuStatus]);
  const styles = StyleSheet.create({
    globalBox: {
      flex: 1,
      backgroundColor: '#412db1',
    },
    chatBox: {
      // flex: 8,
      height: '80%',
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
