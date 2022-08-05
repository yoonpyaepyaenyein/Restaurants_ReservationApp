import React, {useEffect} from 'react';
import {View, Text, Image, WebView} from 'react-native';

//Style
import styles from './style';

//Component
import CompactRestaurantInfo from '../restaurants/compactRestaurantInfo/compactRestaurantInfo';

const MapCallout = props => {
  return (
    <View style={styles.container}>
      <CompactRestaurantInfo restaurant={props.data} />
    </View>
  );
};

export default MapCallout;
