import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import COLORS from '../../../utils/colorUtils';

const styles = StyleSheet.create({
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
    marginTop: wp(12),
    height: hp(30),
    marginHorizontal: wp(10),
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: wp(4),
    color: COLORS.DARK_BLUE,
  },
  infoInput: {
    borderWidth: hp(0.1),
    borderColor: COLORS.LIGHT_BLUE,
    width: wp(75),
    fontSize: hp(2),
    marginTop: hp(4),
    borderRadius: wp(3),
    paddingHorizontal: wp(4),
    fontFamily: 'Montserrat-Light',
    color: COLORS.BLACK,
  },
  user: {
    flexDirection: 'row',
  },
  datePicker: {
    marginTop: wp(8),
    borderColor: COLORS.LIGHT_BLUE,
    borderWidth: hp(0.1),
    height: wp(10),
    width: wp(25),
    borderRadius: wp(3),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
