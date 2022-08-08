import React, {useEffect, useState} from 'react';
import {View, Text, ToastAndroid} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';

//Component
import BookingListContent from '@components/booking/bookingListContent/bookingListContent';
import * as actionBooking from '@store/action/booking';
import AlertModal from '@components/alert/alertModal';

const BookingList = ({navigation, route}) => {
  // const {restaurant} = route.params;

  const [showModal, setShowModal] = useState(false);
  const [bookingName, setBookingName] = useState('');
  const [phNo, setPhNo] = useState();
  const dispatch = useDispatch();

  const booking = useSelector(state => state.bookingsList.bookingItems);

  const bookingList = useSelector(state => {
    let bookingData = state.bookingsList.bookingItems;
    let updateBookingList = [];
    for (const key in bookingData) {
      updateBookingList.push({
        id: bookingData[key].id,
        name: bookingData[key].name,
        vicinity: bookingData[key].vicinity,
        photos: bookingData[key].photos,
        bookingName: bookingData[key].bookingName,
        phNo: bookingData[key].phNo,
      });
    }

    return updateBookingList;
  });

  const goBackHandler = () => {
    navigation.goBack();
  };

  const deleteHandler = value => {
    dispatch(actionBooking.deleteBookings(value.id));
  };

  const updateHandler = value => {
    setShowModal(true);
  };

  const updateBookingHandler = () => {
    let updateData = {
      id: booking[0].id,
      name: booking[0].name,
      photos: booking[0].photos,
      vicinity: booking[0].vicinity,
      bookingName: bookingName,
      phNo: phNo,
    };
    if (updateData.bookingName && updateData.phNo) {
      dispatch(actionBooking.updateBookings(updateData));
      setShowModal(false);
      ToastAndroid.show('Booking Successful', ToastAndroid.SHORT);
    } else {
      ToastAndroid.show('Please Fill Information', ToastAndroid.SHORT);
    }
  };

  const cancelHandler = () => {
    setShowModal(false);
  };

  return (
    <View style={{flex: 1}}>
      <BookingListContent
        data={bookingList}
        delete={deleteHandler}
        update={updateHandler}
        goBack={goBackHandler}
      />

      {showModal && (
        <AlertModal
          cancelUpdate={cancelHandler}
          bookingUpdate={updateBookingHandler}
          bookingNameValue={bookingName}
          onChangeBookingName={value => setBookingName(value)}
          phNoValue={phNo}
          onChangePhNo={value => setPhNo(value)}
        />
      )}
    </View>
  );
};

export default BookingList;
