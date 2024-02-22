import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Image} from 'react-native';

const SyntheticalBar = () => {
  const [mesInput, setMesInput] = useState('');
  return (
    <View style={styles.unitBox}>
      <View style={styles.syntheticalBoxInput}>
        <TextInput
          multiline={true} // 设置为多行模式
          numberOfLines={4} // 设置多行的行数
          value={mesInput}
          onChange={(value: any) => {
            setMesInput(value);
          }}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{color: 'white'}}
          placeholder="type message"
          placeholderTextColor="#F5F5F5"
        />
        <Image source={require('./img/send.png')} />
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
  },
  syntheticalBoxAll: {
    width: 50,
    height: 50,
    backgroundColor: '#4f3ac6',
  },
});

export default SyntheticalBar;
