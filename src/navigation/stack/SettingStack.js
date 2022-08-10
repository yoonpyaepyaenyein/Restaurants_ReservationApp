import React, {useLayoutEffect} from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

//Component
import SettingScreen from '@pages/Settings/Setting';
import SettingFavScreen from '@pages/Settings/SettingFavourites/SettingFav';

const Stack = createNativeStackNavigator();
const SettingStack = ({navigation, route}) => {
  useLayoutEffect(() => {
    let showRouteName = [
      'DashboardStack',
      'BookingStack',
      'SettingStack',
      'Map',
      'Setting',
      'SettingFav',
    ];
    let routeName = getFocusedRouteNameFromRoute(route);

    if (
      showRouteName.includes(routeName == undefined ? 'SettingFav' : routeName)
    ) {
      navigation.setOptions({tabBarStyle: {display: 'flex'}});
    } else {
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    }
  }, [navigation, route]);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Setting" component={SettingScreen} />
      <Stack.Screen name="SettingFavourite" component={SettingFavScreen} />
    </Stack.Navigator>
  );
};

export default SettingStack;
