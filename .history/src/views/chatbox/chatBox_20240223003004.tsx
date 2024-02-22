import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
const ChatBox = () => {
  const styles = StyleSheet.create({
    main: {
      flex: 1,
    },
    loginBackground: {
      flex: 1,
      width: '100%',
      borderRadius: 35,
    },
  });
  return (
    <View style={styles.main}>
      <Image source={require('./img/bg.png')} style={styles.loginBackground} />
    </View>
  );
};

export default ChatBox;
