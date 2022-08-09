import React from 'react';
import {View, Text} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Component
import BookingListScreen from '../../pages/Booking/BookingList/BookingList';
import BookingUpdateScreen from '../../pages/Booking/BookingUpdate/BookingUpdate';

const Stack = createNativeStackNavigator();
const BookingStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="BookingList" component={BookingListScreen} />
      <Stack.Screen name="BookingUpdate" component={BookingUpdateScreen} />
    </Stack.Navigator>
  );
};

export default BookingStack;
