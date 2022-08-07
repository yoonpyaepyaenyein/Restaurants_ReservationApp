import {createStore, applyMiddleware, combineReducers} from 'redux';

import reduxThunk from 'redux-thunk';
import BookingReducer from './reducer/booking';

const rootReducer = combineReducers({
  bookingsList: BookingReducer,
});

const store = createStore(rootReducer, applyMiddleware());

export default store;
