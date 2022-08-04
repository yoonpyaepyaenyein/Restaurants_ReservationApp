import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import COLORS from '../../../utils/colorUtils';

const Styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: wp(7),
    right: wp(4),
    zIndex: 9,
  },
});

export default Styles;
