import {StyleSheet} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import COLORS from '../../../utils/colorUtils';

const styles = StyleSheet.create({
  datePicker: {
    marginTop: wp(8),
    borderColor: COLORS.LIGHT_BLUE,
    borderWidth: hp(0.1),
    height: wp(10),
    width: wp(25),
    borderRadius: wp(3),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
