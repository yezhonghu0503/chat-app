import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  // Text,
  TouchableOpacity,
} from 'react-native';
import {closeMenu, openMenu} from '../../store/reducers/mutual';
import {useDispatch, useSelector} from 'react-redux';
import {
  addChatContents,
  // removeChatContents,
} from '../../store/reducers/loaclData';
import {postChatContent} from '../../api/apply/chat';
import {store} from '../../store/index';
import {addTempChatContentBuffer} from '../../store/reducers/buffer';

const InputTerminal = () => {
  const [mesInput, setMesInput] = useState('');
  const dispatch = useDispatch();
  const menuStatus = useSelector((state: any) => state.mutual.isMenuStatus);
  // const chatContents = useSelector((state: any) => state.local.chatContents);
  return (
    <View style={styles.unitBox}>
      <View style={styles.syntheticalBoxInput}>
        <TextInput
          multiline={true} // 设置为多行模式
          numberOfLines={4} // 设置多行的行数
          value={mesInput}
          onChangeText={(value: any) => {
            setMesInput(value);
          }}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{color: 'white', width: 200}}
          placeholder="type message"
          placeholderTextColor="#F5F5F5"
        />
        {/* <Text>{String(menuStatus)}</Text> */}
        <TouchableOpacity
          onPress={async () => {
            if (mesInput) {
              dispatch(
                addChatContents({
                  role: 'user',
                  content: mesInput,
                }),
              );
              const state = store.getState();
              setMesInput('');
              const res = await postChatContent({
                messages: state.local.chatContents,
              });
              if (res) {
                dispatch(
                  addChatContents({
                    role: 'system',
                    content: '',
                  }),
                );
                dispatch(addTempChatContentBuffer(res.data));
              }
            }
          }}>
          <Image source={require('./img/send.png')} />
        </TouchableOpacity>
      </View>

      <View style={styles.syntheticalBoxMenu}>
        <Image source={require('./img/voice.png')} />
      </View>
      <TouchableOpacity
        onPress={() => {
          menuStatus ? dispatch(closeMenu()) : dispatch(openMenu());
        }}>
        <View style={styles.syntheticalBoxMenu}>
          <Image source={require('./img/menu.png')} />
        </View>
      </TouchableOpacity>
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
    backgroundColor: '#22494b',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
  },
  syntheticalBoxMenu: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: '#22494b',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default InputTerminal;
