import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import DateTimePickerModal from 'react-native-modal-datetime-picker';

//Style
import styles from './style';

//Component
import COLORS from '../../../utils/colorUtils';

const TimePicker = props => {
  return (
    <View>
      <TouchableOpacity onPress={props.showDatePicker}>
        <View style={styles.datePicker}>
          <Text style={{color: COLORS.BLACK, fontFamily: 'Montserrat-Light'}}>
            Pick Date
          </Text>
        </View>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={props.isVisible}
        mode={props.mode}
        onConfirm={props.handleConfirm}
        onCancel={props.hideDatePicker}
      />
    </View>
  );
};

export default TimePicker;
