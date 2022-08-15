import {createStore, applyMiddleware, combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {persistStore, persistReducer} from 'redux-persist';

import reduxThunk from 'redux-thunk';
import BookingReducer from './reducer/booking';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['bookingItems'],
};

const rootReducer = combineReducers({
  bookingsList: persistReducer(persistConfig, BookingReducer),
});

export const store = createStore(rootReducer, applyMiddleware(reduxThunk));
export const persistor = persistStore(store);

export default store;
