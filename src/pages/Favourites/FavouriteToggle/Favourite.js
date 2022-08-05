import React, {useContext, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

//Style
import Styles from './Style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import COLORS from '../../../utils/colorUtils';

import Heart from '@assets/icons/heart';
import {FavouriteContext} from '../../../context/context';

import {appStorage} from '../../../utils/appStorage';

const Favourite = ({restaurant}) => {
  const {favourite, getFavourite} = useContext(FavouriteContext);

  // useEffect(() => {
  //   loadFavourites();
  // }, []);
  // useEffect(() => {
  //   saveFavourites(favourite);
  // }, [favourite]);
  // console.log(favourite.length);

  const isFavourite = favourite.find(r => r.placeId === restaurant.placeId);
  const addToFavourite = restaurant => {
    getFavourite([...favourite, restaurant]);
  };

  const removeFromFavourite = restaurant => {
    const newFavourites = favourite.filter(
      x => x.placeId !== restaurant.placeId,
    );
    getFavourite(newFavourites);
  };

  // const saveFavourites = () => {
  //   try {
  //     appStorage.setItem(
  //       '@favourites',
  //       addToFavourite,
  //       removeFromFavourite,
  //       favourite,
  //     );
  //   } catch (error) {
  //     console.log('error', error);
  //   }
  // };

  // const loadFavourites = () => {
  //   try {
  //     const data = appStorage.getItem('@favourites');
  //     if (data !== null) {
  //       getFavourite(value);
  //     }
  //   } catch (error) {
  //     console.log('error', error);
  //   }
  // };

  return (
    <View style={Styles.container}>
      <TouchableOpacity
        style={Styles.favButton}
        onPress={() =>
          !isFavourite
            ? addToFavourite(restaurant)
            : removeFromFavourite(restaurant)
        }>
        {isFavourite ? (
          <Heart width={hp(5)} height={hp(5)} colors="red" />
        ) : (
          <Heart width={hp(5)} height={hp(5)} color="red" />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Favourite;
