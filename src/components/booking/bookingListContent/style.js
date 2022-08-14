import {StyleSheet} from 'react-native';
import COLORS from '../../../utils/colorUtils';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    height: wp(17),
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
  bookingCard: {
    height: hp(30),
    elevation: 15,
    borderRadius: wp(3),
    backgroundColor: COLORS.WHISPER,
    marginVertical: wp(2),
    marginHorizontal: wp(3),
  },
  leftContainer: {
    marginTop: wp(3),
    marginLeft: wp(4),
    overflow: 'hidden',
  },
  timeCon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  time: {
    color: COLORS.BLACK,
    fontFamily: 'Montserrat-Regular',
    paddingLeft: wp(3),
  },
  restaurantCon: {
    marginTop: wp(3),
    flexDirection: 'row',
    marginLeft: wp(1),
  },
  resName: {
    color: COLORS.SHARK,
    fontSize: wp(3.2),
    fontFamily: 'Montserrat-Bold',
  },
  address: {
    color: COLORS.SHARK,
    fontSize: wp(3),
    fontFamily: 'Montserrat-Regular',
    paddingTop: wp(2),
  },

  bookingContainer: {
    // marginTop: wp(19),
    // marginHorizontal: wp(-80),
  },
  bookingUserCon: {
    flexDirection: 'row',
    paddingTop: wp(3),
  },
  bookingName: {
    paddingLeft: wp(5),
    fontFamily: 'Montserrat-Regular',
    color: COLORS.SHARK,
  },
  bookingPhNoCon: {
    flexDirection: 'row',
    paddingTop: wp(2),
    alignItems: 'center',
    paddingLeft: wp(1),
  },
  phNo: {
    paddingLeft: wp(6),
    fontFamily: 'Montserrat-Regular',
    color: COLORS.SHARK,
  },
  line: {
    width: wp(82),
    height: hp(0.1),
    backgroundColor: COLORS.KIMBERLY,
    alignSelf: 'center',
    marginTop: wp(6),
    color: COLORS.GRAY,
    marginLeft: wp(-5),
  },
  rightContainer: {
    marginRight: hp(2),
    paddingLeft: wp(65),
    marginTop: wp(-30),

    // justifyContent: 'center',
  },
  image: {
    height: hp(11),
    width: hp(12),
    marginLeft: wp(1),
    borderWidth: wp(0.2),
    borderRadius: wp(2),
  },
  updateContainer: {
    marginTop: wp(11),
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginLeft: wp(20),
  },
  updateTxt: {
    fontFamily: 'Montserrat-Regular',
    color: COLORS.JAFFA,
    paddingTop: wp(2),
    marginLeft: wp(-10),
  },
  deleteTxt: {
    fontFamily: 'Montserrat-Regular',
    color: 'red',
    paddingTop: wp(2),
    marginRight: wp(10),
  },
  // timeCon: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   marginTop: wp(-43),
  //   paddingLeft: wp(4),
  // },
  // time: {
  //   color: COLORS.BLACK,
  //   fontFamily: 'Montserrat-Regular',
  //   paddingLeft: wp(3),
  // },
  // restaurantCon: {
  //   marginLeft: wp(-48),
  //   marginBottom: wp(15),
  //   flexDirection: 'row',
  // },
  // resName: {
  //   color: COLORS.SHARK,
  //   fontSize: wp(3.2),
  //   fontFamily: 'Montserrat-Bold',
  // },
  // address: {
  //   color: COLORS.SHARK,
  //   fontSize: wp(3),
  //   fontFamily: 'Montserrat-Regular',
  //   paddingTop: wp(2),
  // },
  // image: {
  //   height: hp(7),
  //   width: hp(10),
  //   marginLeft: wp(5),
  //   borderWidth: wp(0.2),
  //   borderRadius: wp(1),
  //   marginTop: wp(-4),
  // },
  // bookingContainer: {
  //   marginTop: wp(19),
  //   marginHorizontal: wp(-80),
  // },
  // bookingUserCon: {
  //   flexDirection: 'row',
  //   // marginTop: wp(20),
  // },
  // bookingName: {
  //   paddingLeft: wp(5),
  //   fontFamily: 'Montserrat-Regular',
  //   color: COLORS.SHARK,
  // },
  // bookingPhNoCon: {
  //   flexDirection: 'row',
  //   paddingTop: wp(2),
  //   alignItems: 'center',
  //   paddingLeft: wp(1),
  // },
  // phNo: {
  //   paddingLeft: wp(6),
  //   fontFamily: 'Montserrat-Regular',
  //   color: COLORS.SHARK,
  // },
  // line: {
  //   width: wp(80),
  //   height: hp(0.1),
  //   backgroundColor: COLORS.KIMBERLY,
  //   alignSelf: 'center',
  //   marginTop: wp(2),
  //   color: COLORS.GRAY,
  //   // paddingTop: wp(1),
  // },
  // header: {
  //   paddingVertical: 20,
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   marginHorizontal: 20,
  //   overflow: 'hidden',
  // },
  // image: {
  //   height: hp(11),
  //   width: hp(12),
  //   marginLeft: wp(1),
  //   borderWidth: wp(0.2),
  //   borderRadius: wp(2),
  // },
  // title: {
  //   color: COLORS.DARK_BLUE,
  //   fontSize: wp(4),
  //   fontFamily: 'Montserrat-Bold',
  //   paddingLeft: wp(3),
  // },

  // textContainer: {
  //   height: 100,
  //   marginLeft: 10,
  //   paddingVertical: 20,
  //   flex: 1,
  //   justifyContent: 'center',
  // },
  // name: {
  //   color: COLORS.BLACK,
  //   fontSize: wp(3.2),
  //   fontFamily: 'Montserrat-Bold',
  // },
  // address: {
  //   color: COLORS.BLACK,
  //   fontSize: wp(3),
  //   fontFamily: 'Montserrat-Regular',
  //   paddingTop: wp(2.5),
  // },
});

export default styles;
