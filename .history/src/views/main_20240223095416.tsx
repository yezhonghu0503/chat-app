import React, {useEffect, useRef} from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import SyntheticalBar from './synthetical/SyntheticalBar';
import ChatBox from './chatbox/chatBox';
import {useSelector} from 'react-redux';

const FlexDimensionsBasics = () => {
  const chtBoxFlexValue: any = useRef(new Animated.Value(8)).current;
  const menuStatus = useSelector((state: any) => state.mutual.isMenuStatus);
  useEffect(() => {}, [menuStatus]);
  const chatBoxAni = (value: any) => {
    Animated.timing(
      // 随时间变化而执行动画
      fadeAnim, // 动画中的变量值
      {
        toValue: 1, // 透明度最终变为1，即完全不透明
        duration: 10000, // 让动画持续一段时间
      },
    ).start();
  };
  const styles = StyleSheet.create({
    globalBox: {
      flex: 1,
      backgroundColor: '#412db1',
    },
    chatBox: {
      flex: menuStatus ? 8 : 2,
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
      <View style={styles.chatBox}>
        <ChatBox />
      </View>
      <View style={styles.syntheticalBox}>
        <SyntheticalBar />
      </View>
    </View>
  );
};

export default FlexDimensionsBasics;
