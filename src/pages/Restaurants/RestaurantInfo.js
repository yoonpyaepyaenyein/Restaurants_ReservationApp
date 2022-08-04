import React, {useContext, useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {ActivityIndicator, Colors} from 'react-native-paper';

//Style
import Styles from './Style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//Component
import COLORS from '../../utils/colorUtils';
import RestaurantInfoCard from '../../components/restaurants/restaurantInfo/restaurantInfoCard';
import SearchBar from '@components/restaurants/searchBar/searchBar';
import {RestaurantContext} from '../../context/context';
import {
  restaurantsTransform,
  restaurantsRequest,
} from '../../utils/restaurantService';
import {FavouriteContext} from '../../context/context';
import FavouriteBar from '../Favourites/FavouriteBar/FavouriteBar';

const RestaurantInfo = ({navigation}) => {
  const [toggle, setIsToggle] = useState(false);

  const {
    restaurants,
    isLoading,
    error,
    getRestaurants,
    getIsLoading,
    getError,
  } = useContext(RestaurantContext);

  const {favourite, getFavourite} = useContext(FavouriteContext);

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

  const restaurantDetailHandler = value => {
    navigation.navigate('RestaurantDetails', {restaurant: value});
    // console.log('restaurant>>>', value);
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
        <SearchBar
          isFavouriteToggle={toggle}
          onFavouritesToggle={() => setIsToggle(!toggle)}
        />
      </View>
      {toggle && <FavouriteBar favourites={favourite} />}
      <FlatList
        data={restaurants}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => restaurantDetailHandler(item)}>
              <View style={Styles.list}>
                <RestaurantInfoCard restaurant={item} />
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item.name}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default RestaurantInfo;
