import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';

//Style
import Styles from './Style';

const FavouriteBar = props => {
  return (
    <View style={Styles.favouriteWrapper}>
      <Image />
      <Text>Hello</Text>
    </View>
  );
};

export default FavouriteBar;
