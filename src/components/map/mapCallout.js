import React, {useEffect} from 'react';
import {View, Text, Image, WebView} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

//Style
import styles from './style';

//Component
import CompactRestaurantInfo from '../restaurants/compactRestaurantInfo/compactRestaurantInfo';
import COLORS from '../../utils/colorUtils';

const MapCallout = props => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[COLORS.JAFFA, COLORS.JAFFA, COLORS.WHISPER]}
        style={styles.textContainer}>
        <Text style={styles.text}>{props.data.name}</Text>
      </LinearGradient>
    </View>
  );
};

export default MapCallout;
