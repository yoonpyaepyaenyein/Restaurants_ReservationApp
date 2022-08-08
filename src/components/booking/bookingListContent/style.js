import {StyleSheet} from 'react-native';
import COLORS from '../../../utils/colorUtils';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    overflow: 'hidden',
  },
  image: {
    height: hp(11),
    width: hp(12),
    marginLeft: wp(1),
    borderWidth: wp(0.2),
    borderRadius: wp(2),
  },
  title: {
    color: COLORS.DARK_BLUE,
    fontSize: wp(4),
    fontFamily: 'Montserrat-Bold',
    paddingLeft: wp(3),
  },
  bookingCard: {
    height: hp(18),
    elevation: 15,
    borderRadius: wp(3),
    backgroundColor: COLORS.BACKGROUND,
    marginVertical: wp(3),
    marginHorizontal: wp(3),
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    height: 100,
    marginLeft: 10,
    paddingVertical: 20,
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    color: COLORS.BLACK,
    fontSize: wp(3.2),
    fontFamily: 'Montserrat-Bold',
  },
  address: {
    color: COLORS.BLACK,
    fontSize: wp(3),
    fontFamily: 'Montserrat-Regular',
    paddingTop: wp(3),
  },
});

export default styles;
