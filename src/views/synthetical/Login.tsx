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

const Login = () => {
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  return (
    <View style={styles.main}>
      <View style={styles.logo}>
        <Image style={styles.logoPic} source={require('./img/logo.png')} />
        <Text style={styles.loginTit}>Luna AI</Text>
      </View>
      <Text style={styles.logotips}>Sign In to continue</Text>
      {}
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{...styles.username, borderWidth: isUsernameFocused ? 1 : 0}}>
        <Text style={styles.usernameTit}>Username</Text>
        <View>
          <TextInput
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
          onFocus={() => {
            setIsPasswordFocused(true);
          }}
          onBlur={() => {
            setIsPasswordFocused(false);
          }}
        />
      </View>
      <TouchableOpacity style={styles.signButton}>
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
  },
  logoPic: {
    width: 40,
    height: 40,
  },
  loginTit: {
    fontSize: 30,
    fontWeight: '800',
    color: '#333333',
    marginLeft: 5,
  },
  logotips: {
    fontSize: 18,
    fontWeight: '500',
    color: '#3f3b3b',
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
