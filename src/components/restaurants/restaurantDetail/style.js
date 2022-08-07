import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import COLORS from '../../../utils/colorUtils';

const styles = StyleSheet.create({
  container: {
    height: 400,
    backgroundColor: COLORS.BACKGROUND,
    borderBottomColor: COLORS.GRAY,
    borderWidth: wp(0.2),
    borderBottomLeftRadius: wp(3),
    borderBottomRightRadius: wp(3),
  },
  imageBackground: {
    height: 270,
    top: 35,
    marginHorizontal: wp(6),
    borderRadius: wp(5),
    marginTop: wp(3),
  },
  detail: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(6),
  },
  detailContainer: {
    height: 120,
    backgroundColor: COLORS.WHITE,
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
    color: COLORS.DARK_BLUE,
    fontSize: wp(4),
    fontFamily: 'Montserrat-Bold',
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
    color: COLORS.DARK_BLUE,
    fontFamily: 'Montserrat-Regular',
    fontSize: wp(3),
    marginTop: wp(3),
  },
  location: {
    marginTop: 3,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(3),
    paddingTop: wp(2),
  },

  address: {
    color: COLORS.DARK_BLUE,
    fontFamily: 'Montserrat-Light',
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
    top: wp(35),
    marginHorizontal: wp(2),
  },
  footer: {
    height: 120,
    flexDirection: 'row',
    marginTop: wp(50),
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
  btn: {
    backgroundColor: COLORS.BACKGROUND,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,

    marginTop: wp(7),
    marginHorizontal: wp(9),
    borderRadius: 12,
    borderColor: COLORS.BACKGROUND,
    borderWidth: wp(0.2),
    shadowOffset: {width: 0, height: 5},
    shadowColor: COLORS.GRAY,
    shadowOpacity: hp(2),
    elevation: 5,
  },
  btnText: {
    color: COLORS.DARK_BLUE,
    fontSize: wp(3.2),
    fontFamily: 'Montserrat-Bold',
  },
});

export default styles;
