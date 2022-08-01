import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import COLORS from '../../utils/colorUtils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F9FC',
  },
  title: {
    color: COLORS.DARK_BLUE,
    fontWeight: 'bold',
    marginTop: wp(21),
    paddingLeft: wp(7),
    fontSize: wp(7),
    fontFamily: 'Montserrat-BoldItalic',
  },
  subTitle: {
    fontSize: wp(4),
    color: COLORS.LIGHT_BLUE,
    marginTop: wp(3),
    paddingLeft: wp(7),
    fontFamily: 'Montserrat-Bold',
  },
  inputContainer: {
    marginVertical: hp(0.5),
    paddingLeft: wp(7),
  },
  emailInput: {
    borderWidth: hp(0.1),
    borderColor: COLORS.BLACK,
    width: wp(75),
    fontSize: hp(2),
    marginTop: hp(5),
    borderRadius: wp(2),
    paddingStart: wp(6),
    fontFamily: 'Montserrat-Light',
    color: COLORS.BLACK,
  },

  btnContainer: {
    marginVertical: hp(4),
    paddingLeft: wp(7),
  },

  btnContent: {
    // backgroundColor: COLORS.DARK_BLUE,
    width: wp(35),
    paddingVertical: hp(1.5),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(2),
    marginTop: wp(2),
    height: wp(13),
  },

  loginText: {
    fontSize: wp(4),
    color: COLORS.WHITE,
    fontFamily: 'Montserrat-Medium',
  },

  qContainer: {
    paddingLeft: wp(7),
    marginTop: wp(4),
    flexDirection: 'row',
    alignItems: 'center',
  },
  qText: {
    color: COLORS.BLACK,
    // fontSize: hp(2),
    fontFamily: 'Montserrat-Bold',
  },
  regTextContainer: {},
  regText: {
    color: COLORS.DARK_BLUE,
    // fontSize: hp(2.2),
    fontFamily: 'Montserrat-Medium',
  },
});

export default styles;
