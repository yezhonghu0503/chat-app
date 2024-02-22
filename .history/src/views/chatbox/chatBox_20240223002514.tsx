import {Image, StyleSheet, View} from 'react-native';
const ChatBox = () => {
  const styles = StyleSheet.create({
    main: {
      flex: 1,
    },
  });
  return (
    <View style={styles.main}>
      <Image source={require('./img/bg.png')} />
    </View>
  );
};

export default ChatBox;
