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
import {useLocal} from '../../../hook/useLocal';

const BookingDetailContent = props => {
  const local = useLocal();
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
            <Text style={styles.name}>{local.BookTable}</Text>
          </View>
        </View>
      </LinearGradient>

      <View style={styles.inputContainer}>
        <View style={styles.fillText}>
          <Text style={styles.title}>{local.FillInformation}</Text>
        </View>
        <TextInput
          style={styles.infoInput}
          placeholder={local.Name}
          placeholderTextColor={COLORS.GRAY}
          value={props.nameValue}
          onChangeText={props.onChangeName}
        />

        <TextInput
          style={styles.infoInput}
          placeholder={local.PhNo}
          placeholderTextColor={COLORS.GRAY}
          value={props.noValue}
          onChangeText={props.onChangeNo}
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

      <View style={styles.confirmCon}>
        <TouchableOpacity onPress={props.confirm}>
          <Text style={styles.confirmText}>{local.Confirm}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BookingDetailContent;
