import React from 'react';
import {View, Text} from 'react-native';
import {SearchBar} from 'react-native-paper';

//Style
import Styles from './Style';

//Component
import RestaurantInfoContent from '@components/restaurants/restaurantInfoContent';

const RestaurantInfo = () => {
  return (
    <View>
      <View>
        <RestaurantInfoContent />
      </View>
    </View>
  );
};

export default RestaurantInfo;
