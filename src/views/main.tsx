import React, {useEffect, useState} from 'react'; //useEffect, useRef
import {
  View,
  StyleSheet,
  UIManager,
  LayoutAnimation,
  //Dimensions
} from 'react-native';
import SyntheticalBar from './synthetical/SyntheticalBar';
import ChatBox from './chatbox/chatBox';
import {useSelector, useDispatch} from 'react-redux';
import {closeMenu} from '../store/reducers/mutual';

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);
const FlexDimensionsBasics = () => {
  const menuStatus = useSelector((state: any) => state.mutual.isMenuStatus);
  const dispatch = useDispatch();
  // -----业务模块------
  useEffect(() => {
    dispatch(closeMenu());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // -----动画模块------
  // const {height: windowHeight} = Dimensions.get('window');
  const [chatBoxValue, setChatBoxValue] = useState(2);
  useEffect(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    setChatBoxValue(menuStatus ? 8 : 1);
  }, [menuStatus]);

  // 样式表
  const styles = StyleSheet.create({
    globalBox: {
      flex: 1,
      backgroundColor: '#359765',
    },
    chatBox: {
      flex: chatBoxValue,
      // height: 300,
      backgroundColor: '#1b2559',
      margin: 6,
      borderRadius: 35,
    },
    syntheticalBox: {
      flex: menuStatus ? 1 : 2,
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
