import {ADD_BOOKING, DELETE_BOOKING} from '../type';

export const addBooking = data => {
  return {
    type: ADD_BOOKING,
    booking: data,
  };
};

export const deleteBookings = id => {
  return {
    type: DELETE_BOOKING,
    deleteBooking: id,
  };
};
