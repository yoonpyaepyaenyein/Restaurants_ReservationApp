import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Component
import SettingScreen from '../../pages/Settings/Setting';

const Stack = createNativeStackNavigator();
const SettingStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Setting" component={SettingScreen} />
    </Stack.Navigator>
  );
};

export default SettingStack;
