import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import COLORS from '../../utils/colorUtils';

const styles = StyleSheet.create({
  orangeButtonStyle: {
    backgroundColor: COLORS.BLUE_VIOLET,
    height: hp(6),
    width: wp(40),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(4),
    borderColor: COLORS.SHARK,
  },
  startText: {
    color: COLORS.WHISPER,
    fontFamily: 'Montserrat-Regular',
    letterSpacing: wp(0.5),
  },
  bottomPart: {
    flex: 1,
  },
});

export default styles;
