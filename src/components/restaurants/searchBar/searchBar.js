import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

//Style
import styles from './style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import LinearGradient from 'react-native-linear-gradient';

//Component
import Heartless from '@assets/icons/heartless';
import Heart from '@assets/icons/heart';
import COLORS from '../../../utils/colorUtils';
import AvatarIcon from '../../../../assets/icons/avatar';

const SearchBar = props => {
  return (
    <LinearGradient
      colors={[COLORS.BLUE_VIOLET, COLORS.BLUE_VIOLET, COLORS.WHISPER]}
      style={styles.container}>
      <StatusBar backgroundColor={COLORS.BLUE_VIOLET} />

      <View style={styles.leftContainer}>
        <View style={styles.nameInfo}>
          <Text style={styles.name}>Hello , {props.data.name}</Text>
        </View>
      </View>

      <TouchableOpacity onPress={props.onFavouritesToggle}>
        <View style={styles.favCon}>
          <Text style={styles.textFav}>Click your favourites here</Text>

          <View style={styles.heart}>
            {props.isFavouriteToggle ? (
              <Heart width={hp(4)} height={hp(4)} colors="#E98B43" />
            ) : (
              <Heart width={hp(4)} height={hp(4)} color="#E98B43" />
            )}
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.rightContainer}>
        <View style={styles.icon}>
          <AvatarIcon width={hp(5)} height={hp(5)} />
        </View>
      </View>
    </LinearGradient>
  );
};

export default SearchBar;
