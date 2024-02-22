import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import SyntheticalBar from './synthetical/SyntheticalBar';
import {useSelector} from 'react-redux';

const FlexDimensionsBasics = () => {
  const menuStatus = useSelector((state: any) => state.mutual.isMenuStatus);
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
      flex: 1,
    },
  });
  return (
    <View style={styles.globalBox}>
      <View style={styles.chatBox} />
      <View style={styles.syntheticalBox}>
        <SyntheticalBar />
      </View>
    </View>
  );
};

export default FlexDimensionsBasics;
