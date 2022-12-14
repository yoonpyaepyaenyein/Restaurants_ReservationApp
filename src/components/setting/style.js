import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import COLORS from '../../utils/colorUtils';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHISPER,
    flex: 1,
  },
  mail: {
    paddingTop: wp(3),
    color: COLORS.SHARK,
    fontFamily: 'Montserrat-BoldItalic',
    fontSize: wp(4),
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: wp(10),
  },
  favContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: wp(15),
    paddingHorizontal: wp(6),
  },
  heart: {
    paddingTop: wp(5),
  },
  text: {
    paddingHorizontal: wp(6),
  },
  favText: {
    color: COLORS.SHARK,
    fontFamily: 'Montserrat-Regular',
  },
  logoutContainer: {
    height: wp(16),
    marginTop: wp(6),
    flexDirection: 'row',
  },
  logout: {
    paddingTop: wp(5),
    paddingHorizontal: wp(6),
  },
  logoutText: {
    alignItems: 'center',
    justifyContent: 'center',
    color: COLORS.BLACK,
    marginTop: wp(6),
  },
  signOut: {
    color: COLORS.SHARK,
    fontFamily: 'Montserrat-Regular',
  },
});

export default styles;
