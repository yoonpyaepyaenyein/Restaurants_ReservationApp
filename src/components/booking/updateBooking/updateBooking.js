import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';

//Style
import styles from './style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//Component
import TimePicker from '../../../pages/TimePicker/TimePicker';
import BackIcon from '../../../../assets/icons/back';
import COLORS from '../../../utils/colorUtils';

const UpdateBooking = props => {
  return (
    <View>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.back} onPress={props.goBack}>
          <BackIcon width={hp(3)} height={hp(3)} color={COLORS.BLACK} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Update Data</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.title}>Please fill information</Text>
        <TextInput
          style={styles.infoInput}
          placeholder="Name...."
          placeholderTextColor={COLORS.GRAY}
          value={props.nameValue}
          onChangeText={props.onChangeName}
        />

        <TextInput
          style={styles.infoInput}
          placeholder="Ph no...."
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
      <View style={{marginTop: wp(30), alignItems: 'center'}}>
        <TouchableOpacity onPress={props.update}>
          <Text style={{color: COLORS.BLACK}}>UPDATE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UpdateBooking;
