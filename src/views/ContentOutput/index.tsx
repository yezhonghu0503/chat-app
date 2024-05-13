import React, {ReactElement} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ChatBox from './chatbox/chatBox';
import ImageGenerator from './imageGenerator/imgeGenerator';

import {useSelector} from 'react-redux';
import {NoLogin} from './noLogin/NoLogin';

// import {View} from 'react-native';

const Stack = createStackNavigator();

const ContentOutput = (): ReactElement => {
  const {isVerified} = useSelector((state: any) => state.account);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={isVerified ? 'chat' : 'noLogin'}>
        <Stack.Screen
          name="chat"
          options={{headerShown: false}}
          component={ChatBox}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="imageGener"
          component={ImageGenerator}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="noLogin"
          component={NoLogin}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ContentOutput;
