import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
const ChatBox = () => {
  const menuStatus = useSelector((state: any) => state.mutual.isMenuStatus);
  const styles = StyleSheet.create({
    main: {
      flex: 1,
    },
    loginBackground: {
      flex: 1,
      width: '100%',
      borderRadius: 35,
      display: !menuStatus ? 'none' : undefined,
    },
  });
  return (
    <View style={styles.main}>
      <Image source={require('./img/bg.png')} style={styles.loginBackground} />
    </View>
  );
};

export default ChatBox;
