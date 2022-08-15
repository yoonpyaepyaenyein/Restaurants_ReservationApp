import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import DateTimePickerModal from 'react-native-modal-datetime-picker';

//Style
import Styles from './Style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//Component
import COLORS from '../../utils/colorUtils';
import {useLocal} from '../../hook/useLocal';

const TimePicker = props => {
  const local = useLocal();
  return (
    <View>
      <TouchableOpacity onPress={props.showDatePicker}>
        <View style={Styles.datePicker}>
          <Text
            style={{
              color: COLORS.GRAY,
              fontFamily: 'Montserrat-Light',
            }}>
            {local.PickDate}
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
