import {StyleSheet} from 'react-native';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  item: {
    padding: 10,
    maxWidth: 120,
    alignItems: 'center',
  },
  image: {
    borderRadius: 10,
    width: 120,
    height: 120,
  },
});

export default styles;
