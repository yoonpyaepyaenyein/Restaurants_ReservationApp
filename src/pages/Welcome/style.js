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
    color: COLORS.BLACK,
    fontSize: wp(14),
    letterSpacing: wp(4),
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
    color: COLORS.BLACK,
    fontSize: hp(2),
    fontFamily: 'Montserrat-Bold',
  },
});

export default styles;
