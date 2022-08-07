import {ADD_BOOKING, DELETE_BOOKING} from '../type';

const initialState = {
  bookingItems: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOKING:
      let newData = action.booking;

      let updateBookings;

      const newBooking = {
        id: newData.id,
        name: newData.name,
        vicinity: newData.vicinity,
        photos: newData.photos,
        bookingName: newData.bookingName,
        phNo: newData.phNo,
      };
      updateBookings = [...state.bookingItems, newBooking];

      return {
        ...state,
        bookingItems: updateBookings,
      };

    //Delete
    case DELETE_BOOKING: {
      return {
        ...state,
        bookingItems: state.bookingItems.filter(
          item => item.id !== action.deleteBooking,
        ),
      };
    }

    default:
      return state;
  }
};
