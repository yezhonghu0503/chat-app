import React, {useEffect, useRef} from 'react';
import {View, StyleSheet, Animated, Dimensions} from 'react-native';
import SyntheticalBar from './synthetical/SyntheticalBar';
import ChatBox from './chatbox/chatBox';
import {useSelector} from 'react-redux';

const FlexDimensionsBasics = () => {
  const {height: windowHeight} = Dimensions.get('window');
  const menuStatus = useSelector((state: any) => state.mutual.isMenuStatus);
  const chatBoxHeight: any = useRef(new Animated.Value(30)).current;
  const animatedHeight = chatBoxHeight.interpolate({
    inputRange: [0, 1],
    outputRange: [0, windowHeight * 0.9], // 将比例值转换为具体的高度值
  });
  useEffect(() => {
    Animated.timing(chatBoxHeight, {
      toValue: menuStatus ? 80 : 30,
      duration: 5000,
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
      height: chatBoxHeight,
      backgroundColor: '#f7f7f8',
      margin: 6,
      borderRadius: 35,
    },
    syntheticalBox: {
      flex: menuStatus ? 1 : 2,
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
