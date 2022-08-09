import React, {useEffect, useState} from 'react';
import {View, Text, ToastAndroid} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';

//Component
import BookingListContent from '@components/booking/bookingListContent/bookingListContent';
import * as actionBooking from '@store/action/booking';
import AlertModal from '@components/alert/alertModal';

const BookingList = ({navigation}) => {
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
        time: bookingData[key].time,
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
    navigation.navigate('BookingUpdate', {data: value});
  };

  return (
    <View style={{flex: 1}}>
      <BookingListContent
        data={bookingList}
        delete={deleteHandler}
        update={updateHandler}
        goBack={goBackHandler}
      />
    </View>
  );
};

export default BookingList;
