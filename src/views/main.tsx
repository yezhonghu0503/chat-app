import React, {useEffect, useState} from 'react'; //useEffect, useRef
import {
  View,
  StyleSheet,
  UIManager,
  LayoutAnimation,
  //Dimensions
} from 'react-native';
import SyntheticalBar from './synthetical/SyntheticalBar';
// import ChatBox from './ContentOutput/chatbox/chatBox';
import ContentOutput from './ContentOutput';
import {useSelector, useDispatch} from 'react-redux';
import {closeMenu} from '../store/reducers/mutual';
import {getUserStatus} from '../api/account/login';
import {succeedVerified, failVerified} from '../store/reducers/account';
// import {getUserStatus} from '../api/account/login';

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);
const FlexDimensionsBasics = () => {
  const menuStatus = useSelector((state: any) => state.mutual.isMenuStatus);
  const dispatch = useDispatch();
  const token = useSelector((state: any) => state.account.token);
  const userStatus = async () => {
    if (token === '') {
      dispatch(failVerified());
      return;
    }
    // 登录状态校验
    const res = await getUserStatus();
    dispatch(res.data.status ? succeedVerified() : failVerified());
  };
  // -----业务模块------
  useEffect(() => {
    dispatch(closeMenu());
    userStatus();
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
    },
    syntheticalBox: {
      flex: menuStatus ? 0 : 2,
    },
  });
  return (
    <View style={styles.globalBox}>
      <View style={styles.chatBox}>
        <ContentOutput />
      </View>

      <View style={styles.syntheticalBox}>
        <SyntheticalBar />
      </View>
    </View>
  );
};

export default FlexDimensionsBasics;
