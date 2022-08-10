import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Component
import SettingScreen from '@pages/Settings/Setting';
import SettingFavScreen from '@pages/Settings/SettingFavourites/SettingFav';

const Stack = createNativeStackNavigator();
const SettingStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Setting" component={SettingScreen} />
      <Stack.Screen name="SettingFavourite" component={SettingFavScreen} />
    </Stack.Navigator>
  );
};

export default SettingStack;
