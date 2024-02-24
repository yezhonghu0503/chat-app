import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import InputTerminal from './InputTerminal';
import UserMessage from './UserMessage';
const SyntheticalBar = () => {
  const menuStatus = useSelector((state: any) => state.mutual.isMenuStatus);
  return (
    <View style={styles.main}>
      {menuStatus ? <InputTerminal /> : <UserMessage />}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});

export default SyntheticalBar;
