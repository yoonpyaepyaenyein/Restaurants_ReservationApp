import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';

//Component
import AuthStack from './stack/AuthStack';
import {AuthContext} from '../context/context';
import {appStorage} from '../utils/appStorage';
import {RestaurantContext} from '../context/context';
import {FavouriteContext} from '../context/context';

import TabNavigator from './tabs/TabNavigator';

const AppNavigator = () => {
  const [auth, setAuth] = useState(false);
  const [deviceToken, setDeviceToken] = useState(null);
  const [splash, setSplash] = useState(true);
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [favourite, setFavourite] = useState([]);

  /*Auth Context*/
  const context = {
    auth,
    getAuth: value => {
      setAuth(value);
    },
    deviceToken,
    getDeviceToken: value => {
      setDeviceToken(value);
    },
  };

  /*Restaurant Context*/
  const restaurantContext = {
    restaurants,

    getRestaurants: value => {
      setRestaurants(value);
    },
    isLoading,
    getIsLoading: value => {
      setIsLoading(value);
    },
    error,
    getError: value => {
      setIsLoading(value);
    },
  };

  /*Favourite Context*/
  const favouriteContext = {
    favourite,
    getFavourite: value => {
      setFavourite(value);
    },
  };

  // Favourite Storing Using AsyncStorage
  const saveFavourites = async restaurant => {
    try {
      const jsonValue = JSON.stringify(restaurant);
      await AsyncStorage.setItem('@favourite', jsonValue);
    } catch (e) {
      console.log('error storing', e);
    }
  };

  const loadFavourites = async () => {
    try {
      const value = await AsyncStorage.getItem('@favourite');
      if (value !== null) {
        setFavourite(JSON.parse(value));
      }
    } catch (e) {
      console.log('error loading', e);
    }
  };

  /*Component Mounted*/
  useEffect(() => {
    getData();
    getToken();
    loadFavourites();
  }, []);

  useEffect(() => {
    saveFavourites(favourite);
  }, [favourite]);

  /*Firebase Token */
  const getToken = async () => {
    const fcmToken = await messaging().getToken();
    if (fcmToken) {
      appStorage.setItem('@device.token', fcmToken);
      setDeviceToken(fcmToken);
    } else {
      console.log('token error');
    }
  };

  /*Authentication*/
  const getData = () => {
    try {
      const data = appStorage.getItem('@device.token');
      const userData = appStorage.getItem('@user.data');
      if (data) {
        setAuth(true);
        setTimeout(() => {
          setSplash(false);
        }, 2000);
      } else {
        setAuth(false);
        setTimeout(() => {
          setSplash(false);
        }, 2000);
      }
    } catch (error) {
      console.log('error', error);
      setAuth(false);
    }
  };

  if (splash) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 20}}>Welcome to our app</Text>
      </View>
    );
  } else if (auth) {
    return (
      <AuthContext.Provider value={context}>
        <FavouriteContext.Provider value={favouriteContext}>
          <RestaurantContext.Provider value={restaurantContext}>
            <TabNavigator />
          </RestaurantContext.Provider>
        </FavouriteContext.Provider>
      </AuthContext.Provider>
    );
  } else {
    return (
      <AuthContext.Provider value={context}>
        <NavigationContainer>
          <AuthStack />
        </NavigationContainer>
      </AuthContext.Provider>
    );
  }
};

export default AppNavigator;
