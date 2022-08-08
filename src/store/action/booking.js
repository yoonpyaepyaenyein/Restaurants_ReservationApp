import {ADD_BOOKING, UPDATE_BOOKING, DELETE_BOOKING} from '../type';

export const addBooking = data => {
  return {
    type: ADD_BOOKING,
    booking: data,
  };
};

export const updateBookings = data => {
  return {
    type: UPDATE_BOOKING,
    updateBooking: data,
  };
};

export const deleteBookings = id => {
  return {
    type: DELETE_BOOKING,
    deleteBooking: id,
  };
};
