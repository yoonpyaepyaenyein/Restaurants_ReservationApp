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
  noResultCon: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  yet: {
    color: COLORS.BLUE_VIOLET,
    fontFamily: 'Montserrat-Bold',
    fontSize: wp(4),
  },
  bookText: {
    color: COLORS.GRAY,
    fontFamily: 'Montserrat-Regular',
    paddingTop: wp(3),
  },
  emptyImage: {
    width: wp(60),
    height: wp(60),
    borderRadius: wp(3),
    marginBottom: wp(15),
  },
});

export default styles;
