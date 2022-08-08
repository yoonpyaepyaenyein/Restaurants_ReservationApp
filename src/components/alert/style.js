import {StyleSheet} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import COLORS from '../../utils/colorUtils';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(127,127, 127, 0.6)',
    width: wp(100),
    height: hp(100),
    position: 'absolute',
  },
  modalContainer: {
    width: wp(80),
    height: hp(28),
    backgroundColor: '#fff',
    borderRadius: hp(0.3),
    borderRadius: wp(5),
    // justifyContent: 'space-evenly',
  },
  headerTitle: {
    // alignSelf: 'center',
    fontSize: hp(2),
    color: COLORS.DARK_BLUE,
    marginHorizontal: wp(3),
    marginVertical: wp(3),
    fontFamily: 'Montserrat-BoldItalic',
  },
  inputContainer: {
    // marginVertical: hp(2),
    marginHorizontal: wp(7),
  },
  input: {
    borderWidth: hp(0.2),
    borderColor: '#ddd',
    width: wp(65),
    height: wp(10),
    fontSize: hp(2),
    borderRadius: wp(2),
    marginTop: wp(3),
    paddingHorizontal: wp(3),
    color: COLORS.BLACK,
  },
  btnContainer: {
    marginTop: wp(5),
    marginHorizontal: wp(5),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  btnContent: {
    borderColor: COLORS.LIGHT_BLUE,
    borderWidth: wp(0.2),
    borderRadius: wp(2),
    width: wp(18),
    height: wp(8),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.LIGHT_BLUE,
  },
  btnText: {
    color: COLORS.WHITE,
  },
});

export default styles;
