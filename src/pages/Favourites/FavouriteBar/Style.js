import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import COLORS from '../../../utils/colorUtils';

const Styles = StyleSheet.create({
  favouriteWrapper: {
    marginTop: wp(-3),
  },
  title: {
    paddingHorizontal: wp(4),
  },
  favourite: {
    fontFamily: 'Montserrat-Bold',
    fontSize: wp(3),
    color: COLORS.BLACK,
    paddingTop: wp(2),
  },
  imageContainer: {
    paddingHorizontal: wp(3),
    marginBottom: wp(3),
    marginTop: wp(-4),
  },
});

export default Styles;
