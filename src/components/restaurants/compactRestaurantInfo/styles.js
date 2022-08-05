import {StyleSheet} from 'react-native';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import COLORS from '../../../utils/colorUtils';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  imageContainer: {
    alignItems: 'center',
    top: -25,
    borderRadius: 40,
  },
  image: {
    width: 100,
    height: 120,
    borderColor: COLORS.BLACK,
    borderWidth: 2,
    borderRadius: 40,
    overflow: 'hidden',
  },
  textContainer: {
    // backgroundColor: 'green',
    marginTop: wp(-5),
  },
  text: {
    color: COLORS.BLACK,
    marginBottom: hp(1),
    fontFamily: 'Montserrat-Regular',
    fontSize: wp(3),
  },
});

export default styles;
