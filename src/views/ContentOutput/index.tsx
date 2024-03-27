import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ChatBox from './chatbox/chatBox';
import ImageGenerator from './imageGenerator/imgeGenerator';

const Stack = createStackNavigator();
const ContentOutput = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="chat">
        <Stack.Screen name="chat" component={ChatBox} />
        <Stack.Screen name="imageGener" component={ImageGenerator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ContentOutput;
