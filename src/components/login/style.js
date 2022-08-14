import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import COLORS from '../../utils/colorUtils';

const Styles = StyleSheet.create({
  container: {
    marginLeft: wp(-5),
    // flex: 1,
    // backgroundColor: '#F2F9FC',
  },
  title: {
    color: COLORS.BLUE_VIOLET,
    marginTop: wp(14),
    fontSize: wp(7),
    fontFamily: 'Montserrat-Bold',
  },
  welcome: {
    fontFamily: 'Montserrat-Bold',
    color: COLORS.BLUE_VIOLET,
    fontSize: wp(7),
  },
  back: {
    fontFamily: 'Montserrat-Bold',
    color: COLORS.BLUE_VIOLET,
    fontSize: wp(7),
  },
  subTitle: {
    fontSize: wp(4),
    color: COLORS.LIGHT_BLUE,
    marginTop: wp(3),
    paddingLeft: wp(7),
    fontFamily: 'Montserrat-Bold',
  },
  inputContainer: {
    marginVertical: hp(3),
  },
  emailInput: {
    // borderWidth: hp(0.1),
    borderColor: COLORS.WHITE,
    width: wp(75),
    fontSize: hp(2),
    marginTop: hp(3),
    borderRadius: wp(2),
    paddingStart: wp(6),
    fontFamily: 'Montserrat-Light',
    color: COLORS.BLACK,
    backgroundColor: COLORS.WHISPER,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: hp(0.5)},
    shadowOpacity: 0.2,
    shadowRadius: hp(1),
    elevation: 3,
  },

  btnContainer: {
    marginVertical: hp(1),
    // paddingLeft: wp(5),
  },

  btnContent: {
    backgroundColor: COLORS.DARK_BLUE,
    width: wp(75),
    paddingVertical: hp(1.5),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(2),
    marginTop: wp(2),
    height: wp(13),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: hp(0.5)},
    shadowOpacity: 0.2,
    shadowRadius: hp(1),
    elevation: 3,
  },

  loginText: {
    fontSize: wp(4),
    color: COLORS.WHITE,
    fontFamily: 'Montserrat-Medium',
  },

  qContainer: {
    marginTop: wp(13),
    flexDirection: 'row',
    alignItems: 'center',
  },
  qText: {
    color: COLORS.KIMBERLY,
    fontFamily: 'Montserrat-Bold',
  },
  regTextContainer: {},
  regText: {
    color: COLORS.BLUE_VIOLET,
    fontFamily: 'Montserrat-Medium',
  },
});

export default Styles;
