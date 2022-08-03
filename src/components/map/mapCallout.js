import React from 'react';
import {View, Text, Image, WebView} from 'react-native';

//Style
import styles from './style';

//Component
// import CompactRestaurantInfo from '../restaurants/compactRestaurantInfo/compactRestaurantInfo';

const MapCallout = props => {
  return (
    <>
      <Text style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: props.data.photos[0],
          }}
        />
      </Text>
      <Text style={{color: 'red'}}>{props.data.name}</Text>
    </>
  );
};

export default MapCallout;
