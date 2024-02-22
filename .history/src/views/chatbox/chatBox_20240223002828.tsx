import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
const ChatBox = () => {
  const styles = StyleSheet.create({
    main: {
      flex: 1,
    },
    loginBackground: {
      width: 1,
      borderRadius: 15,
    },
  });
  return (
    <View style={styles.main}>
      <Image source={require('./img/bg.png')} style={styles.loginBackground} />
    </View>
  );
};

export default ChatBox;
