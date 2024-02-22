import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
const ChatBox = () => {
  const styles = StyleSheet.create({
    main: {
      flex: 1,
    },
    loginBackground: {
      flex: 1,
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
    },
  });
  return (
    <View style={styles.main}>
      <Image source={require('./img/bg.png')} />
    </View>
  );
};

export default ChatBox;
