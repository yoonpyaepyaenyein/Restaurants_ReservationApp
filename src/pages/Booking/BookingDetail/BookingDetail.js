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
import TimePicker from '../../../components/booking/TimePicker/TimePicker';
import COLORS from '../../../utils/colorUtils';

const BookingDetail = ({navigation, route}) => {
  const {restaurant} = route.params;
  const dispatch = useDispatch();
  // console.log('restaurant>>>', restaurant);

  const [bookingName, setBookingName] = useState('');
  const [phNo, setPhNo] = useState();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

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
      id: restaurant.id,
    };

    if (data.bookingName && data.phNo) {
      dispatch(actionBooking.addBooking(data));
      navigation.goBack();
      ToastAndroid.show('Update Successful', ToastAndroid.SHORT);
    } else {
      ToastAndroid.show('Please Fill Information', ToastAndroid.SHORT);
    }
  };

  return (
    <View>
      <View>
        <BookingDetailContent
          goBack={goBackHandler}
          nameValue={bookingName}
          onChangeName={value => setBookingName(value)}
          noValue={phNo}
          onChangeNo={value => setPhNo(value)}
          confirm={confirmHandler}
        />
      </View>
    </View>
  );
};

export default BookingDetail;
