import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const SyntheticalBar = () => {
  return (
    <View style={styles.unitBox}>
      <TextInput style={styles.syntheticalBoxInput} value="" />
      <View style={styles.syntheticalBoxAll} />
    </View>
  );
};

const styles = StyleSheet.create({
  unitBox: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  syntheticalBoxInput: {
    width: 250,
    height: 50,
    borderWidth: 1,
  },
  syntheticalBoxAll: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
  },
});

export default SyntheticalBar;
