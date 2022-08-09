import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

//Style
import styles from './style';

//Component
import COLORS from '../../utils/colorUtils';
import TimePicker from '@pages/TimePicker/TimePicker';

const AlertModal = props => {
  return (
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <Text style={styles.headerTitle}>Update Data</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Booking Name"
            placeholderTextColor={COLORS.GRAY}
            value={props.bookingNameValue}
            onChangeText={props.onChangeBookingName}
          />
          <TextInput
            style={styles.input}
            placeholder="Phone No"
            placeholderTextColor={COLORS.GRAY}
            value={props.phNoValue}
            onChangeText={props.onChangePhNo}
            keyboardType="number-pad"
          />

          <View style={styles.datePicker}>
            <TimePicker
              isVisible={props.isVisible}
              mode={props.mode}
              handleConfirm={props.handleConfirm}
              hideDatePicker={props.hideDatePicker}
              showDatePicker={props.showDatePicker}
            />
          </View>
        </View>

        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.btnContent}
            onPress={props.bookingUpdate}>
            <Text style={styles.btnText}>Update</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnContent}
            onPress={props.cancelUpdate}>
            <Text style={styles.btnText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AlertModal;
