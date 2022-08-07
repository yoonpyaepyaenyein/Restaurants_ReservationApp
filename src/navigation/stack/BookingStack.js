import React from 'react';
import {View, Text} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Component
import BookingScreen from '../../pages/Booking/Booking';

const Stack = createNativeStackNavigator();
const BookingStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Booking" component={BookingScreen} />
    </Stack.Navigator>
  );
};

export default BookingStack;
