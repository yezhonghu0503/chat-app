import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';

const UserMessage = () => {
  return (
    <View style={styles.main}>
      <Image style={styles.userAvatar} source={require('./img/avatar.png')} />
      <Text style={styles.userName}>Hugo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
  },
  userAvatar: {
    width: 69,
    height: 80,
    borderRadius: 4,
  },
  userName: {
    color: 'white',
    marginTop: 5,
  },
});

export default UserMessage;
