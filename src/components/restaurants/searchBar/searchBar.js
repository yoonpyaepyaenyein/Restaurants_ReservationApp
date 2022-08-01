import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import COLORS from '../../../utils/colorUtils';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const SearchBar = () => {
  return (
    <View>
      {/* searchbar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search"
        placeholderTextColor={COLORS.GRAY}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchBar: {
    borderColor: COLORS.LIGHT_BLUE,
    backgroundColor: COLORS.GRAY,
    borderWidth: wp(0.2),
    marginHorizontal: hp(5),
    marginVertical: hp(3),
    borderRadius: wp(5),
    backgroundColor: COLORS.WHITE,
    paddingStart: hp(3),
    shadowOffset: {width: 0, height: 5},
    shadowColor: COLORS.DARK_BLUE,
    shadowOpacity: hp(0.5),
    elevation: 3,
  },
});
