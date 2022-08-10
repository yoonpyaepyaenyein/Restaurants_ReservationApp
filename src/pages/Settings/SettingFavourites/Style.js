import {StyleSheet} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// import COLORS from '../../utils/colorUtils';

const Styles = StyleSheet.create({
  list: {
    flex: 1,
    paddingBottom: wp(3),
  },
});

export default Styles;
