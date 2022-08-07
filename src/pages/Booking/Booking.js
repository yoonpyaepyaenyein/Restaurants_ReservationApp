import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

import {useSelector, useDispatch} from 'react-redux';

//Component
import BookingHeader from '../../components/booking/bookingHeader/bookingHeader';
import * as actionBooking from '../../store/action/booking';

const Booking = () => {
  const dispatch = useDispatch();

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
  // console.log('BOOKING', bookingList);

  const deleteHandler = value => {
    dispatch(actionBooking.deleteBookings(value.id));
  };

  return <BookingHeader data={bookingList} delete={deleteHandler} />;
};

export default Booking;
