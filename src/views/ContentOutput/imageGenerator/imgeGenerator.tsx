import React from 'react';
import {Text, View} from 'react-native';
import {imgGenStyles as styles} from './imgeGenertorStyles';
const ImageGenerator = () => {
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Text>Gen</Text>
      </View>
    </View>
  );
};

export default ImageGenerator;
