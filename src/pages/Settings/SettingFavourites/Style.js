import {StyleSheet} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import COLORS from '../../../utils/colorUtils';

const Styles = StyleSheet.create({
  list: {
    // flex: 1,
    paddingBottom: wp(3),
  },
  container: {
    height: wp(25),
    backgroundColor: COLORS.BLUE_VIOLET,
    paddingBottom: wp(3),
  },
  backCon: {
    backgroundColor: COLORS.JAFFA,
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
  nameInfo: {
    paddingHorizontal: wp(8),
    marginTop: wp(7),
  },

  name: {
    fontFamily: 'Montserrat-Bold',
    fontSize: wp(3.5),
    color: COLORS.WHITE,
  },
  nonContainer: {alignItems: 'center', marginVertical: wp(80)},
  nonText: {
    color: COLORS.SHARK,
    fontFamily: 'Montserrat-Bold',
    color: COLORS.SHARK,
    fontSize: wp(4),
  },
  nonFav: {
    color: COLORS.SHARK,
    fontFamily: 'Montserrat-Light',
    paddingTop: wp(2),
    color: COLORS.SHARK,
    fontSize: wp(3),
  },
  browseContainer: {
    backgroundColor: COLORS.JAFFA,
    marginTop: wp(7),
    width: wp(35),
    height: wp(10),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(3),
  },
  browseText: {color: COLORS.WHISPER, fontFamily: 'Montserrat-Regular'},
});

export default Styles;
