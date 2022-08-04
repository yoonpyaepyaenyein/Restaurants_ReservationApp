import {StyleSheet} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//COmponent
import COLORS from '../../../utils/colorUtils';

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
    paddingRight: wp(10),
  },
  heartless: {
    position: 'absolute',
    top: wp(10),
    left: wp(16),
  },
});

export default styles;
