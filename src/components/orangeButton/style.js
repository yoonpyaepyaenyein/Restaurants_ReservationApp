import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import COLORS from '../../utils/colorUtils';

const styles = StyleSheet.create({
  orangeButtonStyle: {
    backgroundColor: '#f1f1f1',
    height: hp(6),
    width: wp(40),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(4),
    // shadowColor: COLORS.GRAY,
    // shadowOffset: {width: 0, height: 4},
    // shadowOpacity: 0.3,
    // shadowRadius: 5,
    // elevation: 5,
  },
  startText: {
    color: COLORS.BLACK,
    fontFamily: 'Montserrat-Regular',
    letterSpacing: wp(0.5),
  },
  bottomPart: {
    flex: 1,
  },
});

export default styles;
