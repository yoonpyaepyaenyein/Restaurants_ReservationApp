import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import DateTimePickerModal from 'react-native-modal-datetime-picker';
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
    // console.log('DATA>>>', data);
    dispatch(actionBooking.addBooking(data));
    navigation.goBack();
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = data => {
    setDatePickerVisibility(false);
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
          // confirm={confirmHandler}
        />
      </View>
      {/* <View>
        <TimePicker
          showDatePicker={showDatePicker}
          isVisible={isDatePickerVisible}
          mode="datetime"
          hideDatePicker={hideDatePicker}
        />
      </View> */}
      <View style={{marginTop: wp(30), alignItems: 'center'}}>
        <TouchableOpacity onPress={confirmHandler}>
          <Text style={{color: COLORS.BLACK}}>CONFIRM</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BookingDetail;
