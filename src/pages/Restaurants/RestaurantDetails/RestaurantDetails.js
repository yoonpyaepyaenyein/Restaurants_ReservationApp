import React, {useState} from 'react';
import {View, Text} from 'react-native';

import {List} from 'react-native-paper';

//Style
import Styles from './Style';

//Component
import RestaurantInfoCard from '@components/restaurants/restaurantInfo/restaurantInfoCard';
// import RestaurantDetailMenu from '@components/restaurants/restaurantDetail/restaurantDetailMenu';

const RestaurantDetails = ({route}) => {
  const {restaurant} = route.params;

  return (
    <View>
      <View style={Styles.container}>
        <RestaurantInfoCard restaurant={restaurant} />
      </View>
    </View>
  );
};

export default RestaurantDetails;
