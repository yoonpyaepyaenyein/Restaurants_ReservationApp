import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

//Style
import styles from './style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//Component
import Heartless from '@assets/icons/heartless';
import Heart from '@assets/icons/heart';
import COLORS from '../../../utils/colorUtils';

const SearchBar = props => {
  return (
    <View>
      {/* searchbar */}
      <View style={styles.container}>
        <TextInput
          style={styles.searchBar}
          placeholderTextColor={COLORS.GRAY}
          // placeholder="find your favourite"
        />
        <View style={styles.heartless}>
          <TouchableOpacity onPress={props.onFavouritesToggle}>
            {props.isFavouriteToggle ? (
              <Heart width={hp(5)} height={hp(5)} colors="red" />
            ) : (
              <Heart width={hp(5)} height={hp(5)} color="red" />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SearchBar;
