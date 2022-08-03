import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import COLORS from '../../../utils/colorUtils';

const Styles = StyleSheet.create({
  container: {
    marginTop: wp(3),
    // marginLeft: wp(-3),
    // marginRight: wp(6),
  },
});

export default Styles;
