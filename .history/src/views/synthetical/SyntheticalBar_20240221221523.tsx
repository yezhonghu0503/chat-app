import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const SyntheticalBar = () => {
  const [mesInput, setMesInput] = useState('');
  return (
    <View style={styles.unitBox}>
      <View style={styles.syntheticalBoxInput}>
        <TextInput
          value={mesInput}
          onChange={(value: string) => {
            setMesInput(value);
          }}
          placeholder="type message"
          placeholderTextColor="#F5F5F5"
        />
      </View>

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
    borderRadius: 15,
    color: 'white',
    backgroundColor: '#4f3ac6',
  },
  syntheticalBoxAll: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
  },
});

export default SyntheticalBar;
