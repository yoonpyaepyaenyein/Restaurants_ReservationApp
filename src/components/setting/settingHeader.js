import React from 'react';
import {View, Text} from 'react-native';

import {List} from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//Component
import COLORS from '../../utils/colorUtils';
import settingIcon from '../../../assets/icons/setting';

const SettingHeader = () => {
  return (
    <View>
      <View>
        <settingIcon />
        <Text>Logout</Text>
      </View>
    </View>
  );
};

export default SettingHeader;
