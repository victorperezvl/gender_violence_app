import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import ResourceScreen from '../screens/ResourceScreen';

const Stack = createNativeStackNavigator();



const MainStack = () => {
  
  return (
    <Stack.Navigator initialRouteName="Home"
      screenOptions={{headerShown: false,}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
      <Stack.Screen name="Resource" component={ResourceScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
