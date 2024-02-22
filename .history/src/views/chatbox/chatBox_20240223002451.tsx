import {Image, StyleSheet, View} from 'react-native';
const ChatBox = () => {
  const styles = StyleSheet({
    main: {
      flex: 1,
    },
  });
  return (
    <View style={{flex: 1}}>
      <Image source={require('./img/bg.png')} />
    </View>
  );
};

export default ChatBox;
