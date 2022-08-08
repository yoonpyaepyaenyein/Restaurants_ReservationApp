import React, {useState} from 'react';
import {View, Text} from 'react-native';

import {List} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';

//Style
import Styles from './Style';

//Component
import RestaurantDetailMenu from '@components/restaurants/restaurantDetail/restaurantDetailMenu';
import * as actionBooking from '../../../store/action/booking';
import BookingDetail from '../../Booking/BookingDetail/BookingDetail';

const RestaurantDetails = ({route, navigation}) => {
  const {restaurant} = route.params;
  const dispatch = useDispatch();

  const goBackHandler = () => {
    navigation.goBack();
  };

  const bookingHandler = value => {
    navigation.navigate('BookingDetail', {restaurant: value});
    // dispatch(actionBooking.addBooking(value));
    // console.log('RES>>>', value);
  };

  return (
    <View>
      <View>
        <RestaurantDetailMenu
          restaurant={restaurant}
          goBack={goBackHandler}
          booking={() => bookingHandler(restaurant)}
        />
      </View>
    </View>
  );
};

export default RestaurantDetails;
