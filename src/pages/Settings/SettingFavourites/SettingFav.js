import React, {useContext} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';

//Style
import Styles from './Style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {FavouriteContext} from '../../../context/context';
import {RestaurantContext} from '../../../context/context';
import RestaurantInfoCard from '@components/restaurants/restaurantInfo/restaurantInfoCard';
import COLORS from '../../../utils/colorUtils';
import BackIcon from '../../../../assets/icons/back';

const SettingFav = ({navigation}) => {
  const {favourite} = useContext(FavouriteContext);
  const {restaurants} = useContext(RestaurantContext);

  return favourite.length ? (
    <View
      style={{
        flex: 1,
        paddingVertical: wp(5),
        // paddingHorizontal: wp(),
      }}>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: wp(4),
          paddingBottom: wp(5),
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackIcon width={hp(3)} height={hp(3)} color={COLORS.BLACK} />
        </TouchableOpacity>
        <View style={{paddingLeft: wp(3)}}>
          <Text style={{color: COLORS.BLACK}}>Your Favourites List</Text>
        </View>
      </View>
      <View style={Styles.favContainer}>
        <FlatList
          data={favourite}
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
    </View>
  ) : (
    <View>
      <Text style={{color: 'red'}}>No favourites yet</Text>
    </View>
  );
};

export default SettingFav;
