import React from 'react';
import {View, Text, TouchableOpacity, TextInput, StatusBar} from 'react-native';

//Style
import styles from './style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import LinearGradient from 'react-native-linear-gradient';

//Component
import BackIcon from '@assets/icons/back';
import COLORS from '../../../utils/colorUtils';
import TimePicker from '../../../pages/TimePicker/TimePicker';
import AvatarIcon from '@assets/icons/avatar';
import Heart from '@assets/icons/heart';

const BookingDetailContent = props => {
  return (
    <View>
      <LinearGradient
        colors={[COLORS.BLUE_VIOLET, COLORS.BLUE_VIOLET, COLORS.WHISPER]}
        style={styles.container}>
        <StatusBar backgroundColor={COLORS.BLUE_VIOLET} />

        <View
          style={{
            flexDirection: 'row',
          }}>
          <TouchableOpacity onPress={props.goBack}>
            <View style={styles.backCon}>
              <BackIcon
                width={hp(2)}
                height={hp(2)}
                color={COLORS.WHITE}
                colors={COLORS.WHITE}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.nameInfo}>
            <Text style={styles.name}>Book a table</Text>
          </View>
        </View>
      </LinearGradient>

      <View style={styles.inputContainer}>
        <View style={styles.fillText}>
          <Text style={styles.title}>Please fill information</Text>
        </View>
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
          value={props.noValue}
          onChangeText={props.onChangeNo}
          keyboardType="number-pad"
        />

        {/* <TextInput
          style={styles.infoInput}
          placeholder="Number of persons..."
          placeholderTextColor={COLORS.GRAY}
          value={props.noValue}
          onChangeText={props.onChangeNo}
          keyboardType="number-pad"
        /> */}
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

      <View style={styles.confirmCon}>
        <TouchableOpacity onPress={props.confirm}>
          <Text style={styles.confirmText}>CONFIRM</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BookingDetailContent;
