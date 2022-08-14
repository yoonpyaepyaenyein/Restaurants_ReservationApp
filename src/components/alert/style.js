import {StyleSheet} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import COLORS from '../../utils/colorUtils';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(127,127, 127, 0.6)',
    width: wp(100),
    height: hp(100),
    position: 'absolute',
  },
  modalContainer: {
    width: wp(70),
    height: hp(18),
    backgroundColor: '#fff',
    borderRadius: hp(2),
    justifyContent: 'space-evenly',
  },
  item: {
    // backgroundColor: '#ddd',
    paddingHorizontal: hp(3),
    paddingVertical: hp(3),
    fontFamily: 'Montserrat-Light',
  },
  headerTitle: {
    alignSelf: 'center',
    fontSize: hp(2),
    color: COLORS.SHARK,
    fontFamily: 'Montserrat-Light',
  },
  title: {
    color: 'blue',
    fontFamily: 'Montserrat-Light',
  },
  line: {
    width: '90%',
    height: hp(0.1),
    backgroundColor: COLORS.KIMBERLY,
    alignSelf: 'center',
  },
});

export default styles;
