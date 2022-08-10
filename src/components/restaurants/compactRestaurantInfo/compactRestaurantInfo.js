import React from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styles from './styles';

const CompactRestaurantInfo = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: props.restaurant.photos,
          }}
          resizeMode={'cover'}
        />
      </Text>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{props.restaurant.name}</Text>
      </View>
    </View>
  );
};

export default CompactRestaurantInfo;
