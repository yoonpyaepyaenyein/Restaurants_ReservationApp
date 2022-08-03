import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import messaging from '@react-native-firebase/messaging';
import camelize from 'camelize';

//Component
import AuthStack from './stack/AuthStack';
import {AuthContext} from '../context/context';
import {appStorage} from '../utils/appStorage';
import {mocks, mockImages} from '../data/index';
import {RestaurantContext} from '../context/context';
import {
  restaurantsRequest,
  restaurantsTransform,
} from '../utils/restaurantService';

import TabNavigator from './tabs/TabNavigator';

const AppNavigator = () => {
  const [auth, setAuth] = useState(false);
  const [deviceToken, setDeviceToken] = useState(null);
  const [splash, setSplash] = useState(true);
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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
  // console.log('RESTAURANTS>>>>>', restaurants);

  /*Component Mounted*/
  useEffect(() => {
    getData();
    getToken();
  }, []);

  /*Token */
  const getToken = async () => {
    const fcmToken = await messaging().getToken();
    if (fcmToken) {
      appStorage.setItem('@device.token', fcmToken);
      setDeviceToken(fcmToken);
    } else {
      console.log('token error');
    }
  };

  /*Auth Data*/
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
        <RestaurantContext.Provider value={restaurantContext}>
          <TabNavigator />
        </RestaurantContext.Provider>
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
