import {ADD_BOOKING, DELETE_BOOKING, UPDATE_BOOKING} from '../type';

const initialState = {
  bookingItems: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOKING:
      let newData = action.booking;

      let updateBookings;

      const newBooking = {
        id: state.bookingItems.length + 1,
        name: newData.name,
        vicinity: newData.vicinity,
        photos: newData.photos,
        bookingName: newData.bookingName,
        phNo: newData.phNo,
        time: newData.time,
      };
      updateBookings = [...state.bookingItems, newBooking];

      return {
        ...state,
        bookingItems: updateBookings,
      };

    //Update
    case UPDATE_BOOKING:
      const currentData = action.updateBooking;

      let prodIndex = state.bookingItems.findIndex(
        item => item.id === currentData.id,
      );

      const updateBook = [...state.bookingItems];
      updateBook[prodIndex] = currentData;

      return {
        ...state,
        bookingItems: updateBook,
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
