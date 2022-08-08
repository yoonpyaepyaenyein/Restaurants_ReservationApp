import React from 'react';
import {View, Text} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Component
import BookingListScreen from '../../pages/Booking/BookingList/BookingList';
import BookingDetailScreen from '../../pages/Booking/BookingDetail/BookingDetail';

const Stack = createNativeStackNavigator();
const BookingStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="BookingList" component={BookingListScreen} />
      {/* <Stack.Screen name="BookingDetail" component={BookingDetailScreen} /> */}
    </Stack.Navigator>
  );
};

export default BookingStack;
