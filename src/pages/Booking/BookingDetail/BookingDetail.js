import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ToastAndroid} from 'react-native';

import {useDispatch} from 'react-redux';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//component
import BookingDetailContent from '@components/booking/bookingDetail/bookingDetailContent';
import * as actionBooking from '../../../store/action/booking';
import COLORS from '../../../utils/colorUtils';
import TimePicker from '../../TimePicker/TimePicker';

const BookingDetail = ({navigation, route}) => {
  const {restaurant} = route.params;
  const dispatch = useDispatch();
  // console.log('restaurant>>>', restaurant);

  const [bookingName, setBookingName] = useState('');
  const [phNo, setPhNo] = useState();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [Formatted, setFormatted] = useState('');

  const goBackHandler = () => {
    navigation.goBack();
  };

  const confirmHandler = () => {
    let data = {
      bookingName: bookingName,
      phNo: phNo,
      name: restaurant.name,
      photos: restaurant.photos,
      vicinity: restaurant.vicinity,
      // id: restaurant.id,
      time: Formatted,
    };
    // console.log(data);

    if (data.bookingName && data.phNo && data.time) {
      dispatch(actionBooking.addBooking(data));
      navigation.goBack();
      ToastAndroid.show('Update Successful', ToastAndroid.SHORT);
    } else {
      ToastAndroid.show('Please Fill Information', ToastAndroid.SHORT);
    }
  };

  //Confirm
  const handleConfirm = data => {
    setFormatted(FormatDate(data));
    setModalVisible(false);
  };

  const FormatDate = data => {
    let dateTimeString =
      data.getDate() +
      '/' +
      (data.getMonth() + 1) +
      '/' +
      data.getFullYear() +
      ' ';

    var hours = data.getHours();
    var minutes = data.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours % 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    dateTimeString = dateTimeString + hours + ':' + minutes + ' ' + ampm;

    return dateTimeString;
  };

  //Cancel
  const hideDatePicker = data => {
    setDatePickerVisibility(false);
  };

  //Pick Date
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  return (
    <View>
      <BookingDetailContent
        goBack={goBackHandler}
        nameValue={bookingName}
        onChangeName={value => setBookingName(value)}
        noValue={phNo}
        onChangeNo={value => setPhNo(value)}
        confirm={confirmHandler}
        isVisible={isDatePickerVisible}
        mode="datetime"
        handleConfirm={handleConfirm}
        hideDatePicker={hideDatePicker}
        showDatePicker={showDatePicker}
      />
    </View>
  );
};

export default BookingDetail;
