import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import COLORS from '../../../utils/colorUtils';

const styles = StyleSheet.create({
  // detailContainer: {
  //   height: wp(25),
  //   backgroundColor: COLORS.BLUE_VIOLET,
  //   paddingBottom: wp(3),
  // },
  container: {
    height: 400,
    backgroundColor: COLORS.BACKGROUND,
    borderBottomColor: COLORS.GRAY,
    borderWidth: wp(0.2),
    borderBottomLeftRadius: wp(3),
    borderBottomRightRadius: wp(3),
    // overflow: 'hidden',
  },
  imageBackground: {
    // height: 270,
    // top: 35,
    // marginHorizontal: wp(6),
    // borderRadius: wp(5),
    // marginTop: wp(3),
    // borderColor: COLORS.GRAY,
    // borderWidth: wp(0.5),
    // borderTopLeftRadius: wp(3),
    width: '100%',
    height: 270,
  },
  goBackIcon: {
    width: wp(10),
    backgroundColor: COLORS.JAFFA,
    height: wp(10),
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: wp(2),
    borderColor: COLORS.JAFFA,
    borderRadius: wp(3),
  },
  detail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(6),
  },
  detailContainer: {
    height: 120,
    backgroundColor: COLORS.WHISPER,
    marginHorizontal: 20,
    bottom: -230,
    elevation: 10,
    borderRadius: 18,
    justifyContent: 'center',
    shadowOffset: {width: 0, height: 5},
    shadowColor: COLORS.GRAY,
    shadowOpacity: hp(2),
    elevation: 5,
  },

  title: {
    color: COLORS.BLUE_VIOLET,
    fontSize: wp(4.5),
    fontFamily: 'Montserrat-BoldItalic',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(8),
    marginTop: wp(5),
    marginBottom: wp(3),
  },

  ratingIcon: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 3,
    paddingHorizontal: wp(6),
  },
  rating: {
    color: COLORS.BLUE_VIOLET,
    fontFamily: 'Montserrat-Bold',
    fontSize: wp(3),
    marginTop: wp(4),
  },
  location: {
    marginTop: wp(3),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(3),
    paddingTop: wp(3),
    // borderColor: COLORS.BLUE_VIOLET,
    // borderWidth: wp(0.1),
    // width: wp(80),
    // height: wp(8),
    // marginHorizontal: wp(2),
    // borderRadius: wp(2),
  },

  address: {
    color: COLORS.BLUE_VIOLET,
    fontFamily: 'Montserrat-Regular',
    fontSize: wp(2.8),
    paddingLeft: wp(1),
  },
  iconCon: {
    backgroundColor: COLORS.BACKGROUND,
    width: 50,
    height: 45,
    borderRadius: 12,
    justifyContent: 'center',
    marginTop: wp(7),
    marginLeft: wp(5),
    alignItems: 'center',
    borderColor: COLORS.BACKGROUND,
    borderWidth: wp(0.2),
    shadowOffset: {width: 0, height: 5},
    shadowColor: COLORS.GRAY,
    shadowOpacity: hp(2),
    elevation: 5,
  },

  description: {
    color: COLORS.BLACK,
    paddingHorizontal: wp(6),
    paddingTop: wp(6),
    fontFamily: 'Montserrat-Regular',
    fontSize: wp(3.2),
  },

  desContainer: {
    marginVertical: wp(34),
    marginHorizontal: wp(2),
  },
  desText: {
    color: COLORS.SHARK,
    fontFamily: 'Montserrat-Bold',
    fontSize: wp(3.9),
    marginHorizontal: wp(5),
  },
  footer: {
    height: wp(20),
  },

  bookInfo: {
    borderColor: COLORS.GRAY,
    borderWidth: wp(0.2),
    width: wp(20),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(1),
    height: wp(6),
    marginTop: wp(1),
  },
  bookingContainer: {
    width: wp(80),
    height: wp(10),
    marginTop: wp(-5),
    borderColor: COLORS.JAFFA,
    borderWidth: wp(0.2),
    borderRadius: wp(3),
    marginHorizontal: wp(10),
    backgroundColor: COLORS.JAFFA,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {width: 0, height: 5},
    shadowColor: COLORS.WHISPER,
    shadowOpacity: hp(2),
    elevation: 5,
  },
  booking: {
    color: COLORS.WHISPER,
    fontFamily: 'Montserrat-Bold',
    fontSize: wp(3.5),
  },
});

export default styles;
