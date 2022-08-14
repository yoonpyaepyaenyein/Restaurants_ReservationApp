import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import COLORS from '../../../utils/colorUtils';

const styles = StyleSheet.create({
  container: {
    height: wp(25),
    backgroundColor: COLORS.BLUE_VIOLET,
    paddingBottom: wp(3),
  },
  nameInfo: {
    paddingTop: wp(5),
    paddingHorizontal: wp(10),
  },

  name: {
    fontFamily: 'Montserrat-Bold',
    fontSize: wp(5),
    color: COLORS.WHITE,
  },
  backCon: {
    backgroundColor: COLORS.JAFFA,
    // marginHorizontal: wp(3),
    marginVertical: wp(5),
    marginLeft: wp(6),
    width: wp(7),
    height: hp(4),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLORS.JAFFA,
    borderWidth: wp(0.2),
    borderRadius: wp(3),
  },
  headerContainer: {
    flexDirection: 'row',
    marginTop: wp(5),
    marginHorizontal: wp(5),
    padding: wp(1),
  },
  headerTitle: {
    marginLeft: wp(3),
    fontFamily: 'Montserrat-Bold',
    fontSize: wp(4),
    color: COLORS.BLACK,
  },
  inputContainer: {
    marginTop: wp(3),
    height: hp(30),
    marginHorizontal: wp(6),
  },
  title: {
    fontFamily: 'Montserrat-BoldItalic',
    fontSize: wp(4),
    color: COLORS.SHARK,
  },
  // fillText: {
  //   borderWidth: wp(0.2),
  //   borderColor: COLORS.GRAY,
  //   borderRadius: wp(2),
  //   marginHorizontal: wp(5),
  //   backgroundColor: COLORS.KIMBERLY,
  //   width: wp(60),
  //   paddingHorizontal: wp(7),
  // },
  infoInput: {
    borderWidth: hp(0.1),
    borderColor: COLORS.BLUE_VIOLET,
    width: wp(75),
    fontSize: hp(2),
    marginTop: hp(6),
    borderRadius: wp(3),
    paddingHorizontal: wp(4),
    fontFamily: 'Montserrat-Light',
    color: COLORS.BLACK,
  },
  user: {
    flexDirection: 'row',
  },
  datePicker: {
    marginTop: wp(11),
    borderColor: COLORS.BLUE_VIOLET,
    borderWidth: hp(0.1),
    height: wp(12),
    width: wp(35),
    borderRadius: wp(3),
    justifyContent: 'center',
    paddingHorizontal: wp(4),
  },
  confirmCon: {
    marginTop: wp(50),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLORS.JAFFA,
    borderWidth: hp(0.1),
    height: wp(10),
    width: wp(70),
    backgroundColor: COLORS.JAFFA,
    borderRadius: wp(3),
    marginHorizontal: wp(15),
  },
  confirmText: {
    color: COLORS.WHISPER,
    fontFamily: 'Montserrat-Light',
  },
});

export default styles;
