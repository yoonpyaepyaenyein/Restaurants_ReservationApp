import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Component
import WelcomeScreen from '@pages/Welcome/Welcome';
import LoginScreen from '@pages/Login/Login';
import RegisterScreen from '@pages/Register/Register';
import OnBoardScreen from '../../pages/OnBoarding/OnBoard';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Onboard" component={OnBoardScreen} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
