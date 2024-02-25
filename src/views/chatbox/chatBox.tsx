import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';
import {openMenu} from '../../store/reducers/mutual';
const ChatBox = () => {
  const menuStatus = useSelector((state: any) => state.mutual.isMenuStatus);
  const dispatch = useDispatch();
  const data = [
    {key: 1, role: 'user', content: 'RN滚动组件有哪些？'},
    {
      key: 2,
      role: 'system',
      content:
        'React Native 提供了多种滚动组件，常用的包括 ScrollView 和 FlatList。ScrollView：ScrollView 可以包含多个子组件，并且能够滚动显示所有子组件。适用于少量的静态数据或者子组件数量较少的情况。',
    },
    {key: 3, role: 'user', content: '内容1'},

    // 更多数据
  ];
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
    chatTouch: {
      flex: 1,
      //   marginLeft: 10,
      //   paddingLeft: 10,
      //   paddingRight: 10,
    },
    chatHearder: {
      width: '100%',
      height: 60,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderTopLeftRadius: 35,
      borderTopRightRadius: 35,
      //   backgroundColor: 'white',
    },
    chatHearderText: {
      fontSize: 18,
      marginLeft: 15,
      fontWeight: '800',
      color: 'white',
    },
    chatHearderImage: {
      width: 20,
      height: 20,
      marginRight: 15,
    },
    initalPage: {
      flex: 1,
      justifyContent: 'space-between',
    },
    initalHelp: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 100,
    },
    initalHelpLogo: {
      width: 40,
      height: 40,
    },
    helpTips: {
      color: 'white',
      marginTop: 10,
    },

    chatTouchReturn: {
      width: Dimensions.get('window').width,
      alignItems: 'center',
    },
    chatTouchReturnPic: {
      width: 50,
      height: 30,
    },
    chatUser: {
      width:
        Dimensions.get('window').width - Dimensions.get('window').width * 0.1,
      marginLeft: 10,
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 5,
      paddingLeft: 10,
      paddingBottom: 10,
      marginTop: 15,
    },
    chatUserTit: {
      flex: 1,
      height: 35,
      alignItems: 'center',
      flexDirection: 'row',
    },
    chatUserAva: {
      width: 30,
      height: 30,
      borderRadius: 10,
      marginRight: 5,
    },
  });
  return (
    <View style={styles.main}>
      {/* <Image
          source={require('./img/bg.png')}
          style={styles.loginBackground}
        /> */}
      <View style={styles.chatTouch}>
        <View style={styles.chatHearder}>
          <Text style={styles.chatHearderText}>GPT-4 Turbo</Text>
          <Image
            style={styles.chatHearderImage}
            source={require('./img/menu.png')}
          />
        </View>
        <View style={styles.initalPage}>
          {/* <View style={styles.initalHelp}>
            <Image
              style={styles.initalHelpLogo}
              source={require('../synthetical/img/logo.png')}
            />
            <Text style={styles.helpTips}>How can I help you today?</Text>
          </View> */}
          <FlatList
            data={data}
            renderItem={({item}) => (
              <View
                key={item.key}
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  ...styles.chatUser,
                  backgroundColor: item.role === 'user' ? 'white' : '#171718',
                }}>
                <View
                  style={{
                    ...styles.chatUserTit,
                  }}>
                  <Image
                    style={styles.chatUserAva}
                    source={require('../synthetical/img/avatar.png')}
                  />
                  {/* eslint-disable-next-line react-native/no-inline-styles */}
                  <Text style={{color: item.role === 'user' ? '' : 'white'}}>
                    {item.role === 'user' ? '你' : 'ChatGPT'}
                  </Text>
                </View>
                {/* eslint-disable-next-line react-native/no-inline-styles */}
                <Text style={{color: item.role === 'user' ? '' : 'white'}}>
                  {item.content}
                </Text>
              </View>
            )}
          />
        </View>
        <TouchableOpacity
          style={styles.chatTouchReturn}
          onPress={() => {
            dispatch(openMenu());
          }}>
          <Image
            style={styles.chatTouchReturnPic}
            borderRadius={15}
            source={require('./img/remove.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatBox;
