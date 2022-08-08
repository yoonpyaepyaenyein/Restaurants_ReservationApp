import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';

//Style
import styles from './style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//Component
import BackIcon from '@assets/icons/back';
import COLORS from '../../../utils/colorUtils';

const BookingDetailContent = props => {
  return (
    <View>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.back} onPress={props.goBack}>
          <BackIcon width={hp(3)} height={hp(3)} color={COLORS.BLACK} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Book a table</Text>
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
          value={props.noValue}
          onChangeText={props.onChangeNo}
          keyboardType="number-pad"
        />
        <TouchableOpacity>
          <View style={styles.datePicker}>
            <Text style={{color: COLORS.BLACK, fontFamily: 'Montserrat-Light'}}>
              Pick Date
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: wp(30), alignItems: 'center'}}>
        <TouchableOpacity onPress={props.confirm}>
          <Text style={{color: COLORS.BLACK}}>CONFIRM</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BookingDetailContent;
