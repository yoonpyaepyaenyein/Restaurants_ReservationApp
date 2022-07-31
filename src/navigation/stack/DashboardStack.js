import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Component
// import DashboardScreen from '@pages/Dashboard/Dashboard';
import RestaurantInfoScreen from '../../pages/Restaurants/RestaurantInfo';

const Stack = createNativeStackNavigator();

const DashboardStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="RestaurantInfo" component={RestaurantInfoScreen} />
    </Stack.Navigator>
  );
};

export default DashboardStack;
