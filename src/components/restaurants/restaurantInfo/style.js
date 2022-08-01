import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import COLORS from '../../../utils/colorUtils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F9FC',
  },
  cardContainer: {
    marginHorizontal: wp(4),
    backgroundColor: COLORS.WHITE,
  },
  card: {
    backgroundColor: COLORS.WHITE,
    height: hp(37),
    width: wp(92),
    shadowOffset: {width: 0, height: 5},
    shadowColor: COLORS.DARK_BLUE,
    shadowOpacity: hp(0.5),
    elevation: 5,
  },
  cover: {
    padding: wp(4),
    backgroundColor: COLORS.WHITE,
  },
  info: {
    paddingHorizontal: wp(3),
    paddingVertical: wp(-5),
  },
  title: {
    color: COLORS.DARK_BLUE,
    fontFamily: 'Montserrat-BoldItalic',
    fontSize: wp(4),
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    flexDirection: 'row',
    paddingTop: hp(0.5),
    paddingBottom: hp(0.5),
  },
  sectionEnd: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  address: {
    color: COLORS.LIGHT_BLUE,
    fontFamily: 'Montserrat-Bold',
    fontSize: wp(3),
  },
});

export default styles;
