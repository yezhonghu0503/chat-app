import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {postUserVerify} from '../../api/account/login';
import {useDispatch} from 'react-redux';
import {
  addToken,
  removeToken,
  succeedVerified,
} from '../../store/reducers/account';
import Toast from 'react-native-toast-message';

const Login = () => {
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  // const state = useSelector((state: any) => state);
  const [userInputData, setUserInputData] = useState({
    username: '',
    password: '',
  });
  const dispatch = useDispatch();
  const showToast = () => {
    Toast.show({
      type: 'success',
      text1: 'Welcome',
      text2: 'You have completed verification! 👋',
    });
  };
  const debugShowToast = (error: any) => {
    Toast.show({
      type: 'error',
      text1: 'error',
      text2: error,
    });
  };
  const userVerify = async () => {
    const res = await postUserVerify({passphrase: userInputData.password});
    console.log(res.data);
    debugShowToast(res.data);
    if (res.data.status === 200) {
      showToast();
      dispatch(removeToken());
      dispatch(addToken(res.data.token));
      dispatch(succeedVerified());
    }
  };
  return (
    <View style={styles.main}>
      <View style={styles.logo}>
        <Image style={styles.logoPic} source={require('./img/logo.png')} />
        <Image
          style={styles.logoPicTit}
          source={require('./img/logoTit.png')}
        />
      </View>
      <Text style={styles.logotips}>Sign In to continue</Text>
      {}
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{...styles.username, borderWidth: isUsernameFocused ? 1 : 0}}>
        <Text style={styles.usernameTit}>Username</Text>
        <View>
          <TextInput
            value={userInputData.username}
            onChangeText={(input: any) => {
              setUserInputData({...userInputData, username: input});
            }}
            onFocus={() => {
              setIsUsernameFocused(true);
            }}
            onBlur={() => {
              setIsUsernameFocused(false);
            }}
          />
        </View>
      </View>
      {}
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{...styles.username, borderWidth: isPasswordFocused ? 1 : 0}}>
        <Text style={styles.usernameTit}>Verification Code</Text>
        <TextInput
          secureTextEntry={true}
          value={userInputData.password}
          onChangeText={(input: any) => {
            setUserInputData({...userInputData, password: input});
          }}
          onFocus={() => {
            setIsPasswordFocused(true);
          }}
          onBlur={() => {
            setIsPasswordFocused(false);
          }}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          userVerify();
        }}
        style={styles.signButton}>
        <Text style={styles.signButtonText}>Sign In</Text>
      </TouchableOpacity>
      <Text style={styles.signNoCode}>No verification code?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginLeft: 5,
    marginRight: 5,
  },
  logo: {
    height: 50,
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  logoPic: {
    width: 45,
    height: 45,
  },
  logoPicTit: {
    width: 100,
    height: 26,
    marginLeft: 5,
  },
  logotips: {
    fontSize: 18,
    fontWeight: '500',
    color: '#3f3b3b',
    // marginTop: 10,
  },
  username: {
    width:
      Dimensions.get('window').width - Dimensions.get('window').width * 0.2,
    height: 60,
    backgroundColor: '#eeefef',
    marginTop: 25,
    borderRadius: 15,
    padding: 10,
    paddingLeft: 20,
    borderColor: '#7574f4',
  },

  usernameTit: {
    // height: 20,
    marginLeft: 4,
    marginBottom: -10,
    // backgroundColor: 'black',
  },
  signButton: {
    width:
      Dimensions.get('window').width - Dimensions.get('window').width * 0.2,
    height: 60,
    backgroundColor: '#857cf5',
    marginTop: 25,
    marginBottom: 10,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signButtonText: {
    color: 'white',
    fontSize: 18,
  },
  signNoCode: {
    fontSize: 14,
    color: '#7064fe',
  },
});

export default Login;
