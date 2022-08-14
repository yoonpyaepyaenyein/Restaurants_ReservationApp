import React, {useContext} from 'react';
import {View, Text, FlatList, TouchableOpacity, StatusBar} from 'react-native';

//Style
import Styles from './Style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import LinearGradient from 'react-native-linear-gradient';

import {FavouriteContext} from '../../../context/context';
import {RestaurantContext} from '../../../context/context';
import RestaurantInfoCard from '@components/restaurants/restaurantInfo/restaurantInfoCard';
import COLORS from '../../../utils/colorUtils';
import BackIcon from '@assets/icons/back';

const SettingFav = ({navigation}) => {
  const {favourite} = useContext(FavouriteContext);
  const {restaurants} = useContext(RestaurantContext);

  return favourite.length ? (
    <View
      style={{
        flex: 1,
        paddingBottom: wp(25),
      }}>
      <LinearGradient
        colors={[COLORS.BLUE_VIOLET, COLORS.BLUE_VIOLET, COLORS.WHISPER]}
        style={Styles.container}>
        <StatusBar backgroundColor={COLORS.BLUE_VIOLET} />

        <View
          style={{
            flexDirection: 'row',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={Styles.backCon}>
              <BackIcon
                width={hp(2)}
                height={hp(2)}
                color={COLORS.WHITE}
                colors={COLORS.WHITE}
              />
            </View>
          </TouchableOpacity>
          <View style={Styles.nameInfo}>
            <Text style={Styles.name}>Your Favourite Restaurants</Text>
          </View>
        </View>
      </LinearGradient>

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
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View style={Styles.backCon}>
          <BackIcon
            width={hp(2)}
            height={hp(2)}
            color={COLORS.WHITE}
            colors={COLORS.WHITE}
          />
        </View>
      </TouchableOpacity>
      <View style={Styles.nonContainer}>
        <Text style={Styles.nonText}>Uh-oh! You don't have any</Text>
        <Text style={Styles.nonText}>favourites yet.</Text>
        <Text style={Styles.nonFav}>Click the ♡ to add your favourites</Text>
        <TouchableOpacity onPress={() => navigation.navigate('RestaurantInfo')}>
          <View style={Styles.browseContainer}>
            <Text style={Styles.browseText}>Browse Now</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SettingFav;
