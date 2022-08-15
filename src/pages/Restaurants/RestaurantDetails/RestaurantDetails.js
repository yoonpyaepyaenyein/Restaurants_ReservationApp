import React from 'react';
import {View} from 'react-native';

import {useDispatch} from 'react-redux';

//Style
import Styles from './Style';

//Component
import RestaurantDetailMenu from '@components/restaurants/restaurantDetail/restaurantDetailMenu';

const RestaurantDetails = ({route, navigation}) => {
  const {restaurant} = route.params;
  const dispatch = useDispatch();

  const goBackHandler = () => {
    navigation.goBack();
  };

  const bookingHandler = value => {
    navigation.navigate('BookingDetail', {restaurant: value});
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
