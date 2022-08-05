import React from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';

//Style
import Styles from './Style';

//Component
import CompactRestaurantInfo from '@components/restaurants/compactRestaurantInfo/compactRestaurantInfo';

const FavouriteBar = props => {
  if (!props.favourites.length) {
    return null;
  }
  return (
    <View style={Styles.favouriteWrapper}>
      <View style={Styles.title}>
        <Text style={Styles.favourite}>Favourites</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {props.favourites.map(restaurant => {
          return (
            <View key={Math.random()} style={Styles.imageContainer}>
              <TouchableOpacity
                onPress={() =>
                  props.onNavigate('RestaurantDetails', {
                    restaurant,
                  })
                }>
                <CompactRestaurantInfo
                  restaurant={restaurant}
                  style={Styles.image}
                />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default FavouriteBar;
