import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import COLORS from '../../utils/colorUtils';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: wp(7),
    right: wp(7),
    zIndex: 9,
    // backgroundColor: 'red',
  },
  favButton: {
    // backgroundColor: 'green',
  },
});

export default styles;
