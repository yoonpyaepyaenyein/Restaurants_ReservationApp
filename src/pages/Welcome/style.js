import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//Component
import COLORS from '../../utils/colorUtils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topPart: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingVertical: hp(10),
  },
  bookTextStyle: {
    color: COLORS.BLUE_VIOLET,
    fontSize: wp(10),
    letterSpacing: wp(4),
    fontFamily: 'Montserrat-BoldItalic',
  },
  res: {
    // fontFamily: 'Montserrat-Light',
    color: COLORS.BLUE_VIOLET,
    fontFamily: 'Montserrat-Light',
  },

  register: {
    marginVertical: hp(4),
  },
  oRContainer: {
    alignItems: 'center',
    marginVertical: wp(5),
  },
  oRText: {
    color: COLORS.SHARK,
    fontSize: hp(2),
    fontFamily: 'Montserrat-Bold',
  },
});

export default styles;
