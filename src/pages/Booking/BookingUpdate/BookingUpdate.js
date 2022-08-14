import React, {useState} from 'react';
import {View, Text, ToastAndroid} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';

//Component
import UpdateBooking from '@components/booking/updateBooking/updateBooking';
import * as actionBooking from '@store/action/booking';

const BookingUpdate = ({navigation, route}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [Formatted, setFormatted] = useState('');
  const [bookingName, setBookingName] = useState('');
  const [phNo, setPhNo] = useState();
  const {data} = route.params;
  console.log('DaTa:::', data);

  const dispatch = useDispatch();

  // Confirm
  const handleConfirm = data => {
    setFormatted(FormatDate(data));
    setModalVisible(false);
  };

  const FormatDate = data => {
    let dateTimeString =
      data.getDate() +
      '-' +
      (data.getMonth() + 1) +
      '-' +
      data.getFullYear() +
      ' at ';

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

  const updateHandler = () => {
    let updateData = {
      id: data.id,
      name: data.name,
      photos: data.photos,
      vicinity: data.vicinity,
      bookingName: bookingName,
      phNo: phNo,
      time: Formatted,
    };

    console.log(updateData);
    if (updateData.bookingName && updateData.phNo && updateData.time) {
      dispatch(actionBooking.updateBookings(updateData));
      navigation.goBack();
      ToastAndroid.show('Update Successful', ToastAndroid.SHORT);
    } else {
      ToastAndroid.show('Please Fill Information', ToastAndroid.SHORT);
    }
  };

  return (
    <View>
      <UpdateBooking
        isVisible={isDatePickerVisible}
        mode="datetime"
        handleConfirm={handleConfirm}
        hideDatePicker={hideDatePicker}
        showDatePicker={showDatePicker}
        nameValue={bookingName}
        onChangeName={value => setBookingName(value)}
        phNoValue={phNo}
        onChangePhNo={value => setPhNo(value)}
        update={updateHandler}
      />
    </View>
  );
};

export default BookingUpdate;
