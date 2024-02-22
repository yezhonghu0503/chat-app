import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import SyntheticalBar from './synthetical/SyntheticalBar';
import {useSelector, Provider} from 'react-redux';
import store from '../store';

const FlexDimensionsBasics = () => {
  const menuStatus = useSelector((state: any) => state.static.isMenuStatus);
  return (
    <Provider store={store}>
      <View style={styles.globalBox}>
        <View style={styles.chatBox} />
        <View style={styles.syntheticalBox}>
          <SyntheticalBar />
        </View>
        <Text>{menuStatus}</Text>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  globalBox: {
    flex: 1,
    backgroundColor: '#412db1',
  },
  chatBox: {
    flex: 8,
    backgroundColor: '#f7f7f8',
    margin: 6,
    borderRadius: 35,
  },
  syntheticalBox: {
    flex: 1,
  },
});

export default FlexDimensionsBasics;
