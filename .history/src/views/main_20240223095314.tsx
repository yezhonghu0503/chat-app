import React,{useEffect, useRef} from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import SyntheticalBar from './synthetical/SyntheticalBar';
import ChatBox from './chatbox/chatBox';
import {useSelector} from 'react-redux';

const FlexDimensionsBasics = () => {
  const chtBoxFlexValue:any = useRef(new Animated.Value(8)).current;
  const menuStatus = useSelector((state: any) => state.mutual.isMenuStatus);
  useEffect(()=>{
    
  },[menuStatus])
  const chatBoxAni = (value:any) => {
    Animated.timing({
      chtBoxFlexValue,
      {
        toValue: value,             
        duration: 10000,
      }
    }).start()
  }
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
