import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {openMenu} from '../../store/reducers/mutual';
const ChatBox = () => {
  const menuStatus = useSelector((state: any) => state.mutual.isMenuStatus);
  const dispatch = useDispatch();
  const styles = StyleSheet.create({
    main: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    loginBackground: {
      flex: 1,
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      borderRadius: 35,
      display: menuStatus ? 'none' : undefined,
    },
  });
  return (
    <View style={styles.main}>
      {/* <Image
          source={require('./img/bg.png')}
          style={styles.loginBackground}
        /> */}
      <TouchableOpacity
        onPress={() => {
          dispatch(openMenu());
        }}>
        <Text>dddd</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChatBox;
