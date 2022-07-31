import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import COLORS from '../../utils/colorUtils';

import styles from './style';

const OrangeButton = props => {
  return (
    <View>
      <TouchableOpacity onPress={props.startCLick}>
        <LinearGradient
          colors={[COLORS.GRADIENT_1, '#ddd', COLORS.GRADIENT_3]}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
          style={styles.orangeButtonStyle}>
          <Text style={styles.startText}>{props.text}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default OrangeButton;
