import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F9FC',
  },
  search: {},
  list: {
    flex: 1,
    paddingBottom: wp(3),
  },
  indicatorContainer: {
    position: 'absolute',
    top: '50%',
    left: '50%',
  },
});

export default Styles;
