import React, {useContext, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {ActivityIndicator, Colors} from 'react-native-paper';

//Style
import Styles from './Style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//Component
import RestaurantInfoCard from '../../components/restaurants/restaurantInfo/restaurantInfoCard';
import SearchBar from '@components/restaurants/searchBar/searchBar';
import {RestaurantContext} from '../../context/context';
import {
  restaurantsTransform,
  restaurantsRequest,
} from '../../utils/restaurantService';
import COLORS from '../../utils/colorUtils';

const RestaurantInfo = () => {
  const {
    restaurants,
    isLoading,
    error,
    getRestaurants,
    getIsLoading,
    getError,
  } = useContext(RestaurantContext);

  useEffect(() => {
    retrieveRestaurants();
  }, []);

  const retrieveRestaurants = () => {
    getIsLoading(true);
    setTimeout(() => {
      restaurantsRequest()
        .then(restaurantsTransform)
        .then(restaurants => {
          getIsLoading(false);
          getRestaurants(restaurants);
        })
        .catch(err => {
          getError(err);
        });
    }, 2000);
  };

  return (
    <View style={Styles.container}>
      {isLoading && (
        <View style={Styles.indicatorContainer}>
          <ActivityIndicator
            size={50}
            style={{marginLeft: wp(-9)}}
            animating={true}
            color={COLORS.DARK_BLUE}
          />
        </View>
      )}
      <View style={Styles.search}>
        <SearchBar />
      </View>
      <FlatList
        data={restaurants}
        renderItem={({item}) => {
          return (
            <View style={Styles.list}>
              <RestaurantInfoCard restaurant={item} />
            </View>
          );
        }}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

export default RestaurantInfo;
