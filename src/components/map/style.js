import {StyleSheet} from 'react-native';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import COLORS from '../../utils/colorUtils';

const styles = StyleSheet.create({
  text: {
    color: COLORS.WHITE,
    fontFamily: 'Montserrat-Regular',
    fontSize: wp(3),
  },
  textContainer: {
    borderRadius: wp(1),
    // backgroundColor: COLORS.BLUE_VIOLET,
    borderColor: COLORS.WHISPER,
    borderWidth: wp(0.1),
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(30),
    height: wp(10),
  },
  // container: {
  //   width: wp(30),
  //   height: wp(10),
  // },
});

export default styles;
