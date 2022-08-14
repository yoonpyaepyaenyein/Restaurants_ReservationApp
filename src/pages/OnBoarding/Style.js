import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import COLORS from '../../utils/colorUtils';

const Styles = StyleSheet.create({
  label: {
    color: COLORS.BLUE_VIOLET,
    fontFamily: 'Montserrat-Regular',
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  infoContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 35,
    marginTop: wp(-20),
  },
  image: {
    width: wp(60),
    height: wp(150),
  },
  title: {
    color: COLORS.SHARK,
    marginTop: wp(-40),
    fontFamily: 'Montserrat-Bold',
    color: COLORS.BLUE_VIOLET,
    fontSize: wp(4.5),
  },
  description: {
    color: COLORS.SHARK,
    fontFamily: 'Montserrat-Light',
    color: COLORS.BLACK,
    marginTop: wp(7),
    paddingLeft: wp(3),
    textAlign: 'center',
    lineHeight: wp(7),
  },
  active: {
    backgroundColor: COLORS.KIMBERLY,
    width: wp(8),
  },
});

export default Styles;
