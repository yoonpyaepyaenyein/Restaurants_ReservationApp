import React, {useLayoutEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';

//Component
import RestaurantInfoScreen from '@pages/Restaurants/RestaurantInfo';
import RestaurantDetailsScreen from '@pages/Restaurants/RestaurantDetails/RestaurantDetails';

const Stack = createNativeStackNavigator();

const DashboardStack = ({navigation, route}) => {
  useLayoutEffect(() => {
    let showRouteName = ['DashboardStack', 'RestaurantInfo', 'Map'];
    let routeName = getFocusedRouteNameFromRoute(route);

    if (
      showRouteName.includes(
        routeName == undefined ? 'RestaurantInfo' : routeName,
      )
    ) {
      navigation.setOptions({tabBarStyle: {display: 'flex'}});
    } else {
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    }
  }, [navigation, route]);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="RestaurantInfo" component={RestaurantInfoScreen} />
      <Stack.Screen
        name="RestaurantDetails"
        component={RestaurantDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default DashboardStack;
