import React from 'react';
import {View, StyleSheet} from 'react-native';
import SyntheticalBar from './synthetical/SyntheticalBar';

const FlexDimensionsBasics = () => {
  return (
    <View style={styles.globalBox}>
      <View style={styles.chatBox} />
      <View style={styles.syntheticalBox}>
        <SyntheticalBar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  globalBox: {
    flex: 1,
    backgroundColor: '#7B68EE',
  },
  chatBox: {
    flex: 8,
    backgroundColor: 'white',
    margin: 6,
    borderRadius: 35,
  },
  syntheticalBox: {
    flex: 1,
    backgroundColor: 'rgb(65,45,177)',
  },
});

export default FlexDimensionsBasics;
