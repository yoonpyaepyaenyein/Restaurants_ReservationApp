import {StyleSheet} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//COmponent
import COLORS from '../../../utils/colorUtils';

const styles = StyleSheet.create({
  container: {
    height: wp(25),
    backgroundColor: COLORS.BLUE_VIOLET,
    paddingBottom: wp(3),
  },
  rightContainer: {
    width: wp(20),
    paddingLeft: wp(10),
    marginLeft: wp(72),
    marginTop: wp(-19),
  },
  nameInfo: {
    paddingTop: wp(4),
    paddingHorizontal: wp(5),
  },
  name: {
    fontFamily: 'Montserrat-Bold',
    fontSize: wp(5),
    color: COLORS.WHITE,
  },
  textFav: {
    color: COLORS.JAFFA,
    fontFamily: 'Montserrat-Regular',
    fontSize: wp(3),
  },
  icon: {
    // paddingLeft: wp(10),
    // paddingTop: wp(2),
  },
  favCon: {
    marginTop: wp(3),
    paddingHorizontal: wp(7),
    flexDirection: 'row',
    width: wp(60),
    backgroundColor: COLORS.KIMBERLY,
    height: wp(8),
    alignItems: 'center',
    borderWidth: wp(0.2),
    borderColor: COLORS.GRAY,
    borderRadius: wp(2),
    marginHorizontal: wp(5),
  },
  heart: {
    paddingLeft: wp(2),
    paddingTop: wp(3),
  },
});

export default styles;
