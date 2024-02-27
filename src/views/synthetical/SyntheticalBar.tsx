import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import InputTerminal from './InputTerminal';
import UserMessage from './UserMessage';
import Login from './Login';
const SyntheticalBar = () => {
  const menuStatus = useSelector((state: any) => state.mutual.isMenuStatus);
  const isVerified = useSelector((state: any) => state.mutual.isVerified);
  return (
    <View style={styles.main}>
      {menuStatus ? (
        <InputTerminal />
      ) : isVerified ? (
        <UserMessage />
      ) : (
        <Login />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});

export default SyntheticalBar;
