import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import messaging from '@react-native-firebase/messaging';

//Component
import AuthStack from './stack/AuthStack';
import {AuthContext} from '../context/context';
import {appStorage} from '../utils/appStorage';
import DashboardStack from './stack/DashboardStack';

const AppNavigator = () => {
  const [auth, setAuth] = useState(false);
  const [deviceToken, setDeviceToken] = useState(null);
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    getData();
    getToken();
  }, []);

  const getToken = async () => {
    const fcmToken = await messaging().getToken();
    // console.log('fcmToken>>>', fcmToken);
    if (fcmToken) {
      appStorage.setItem('@device.token', fcmToken);
      setDeviceToken(fcmToken);
    } else {
      console.log('token error');
    }
  };

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

  const getData = () => {
    try {
      const data = appStorage.getItem('@device.token');
      // console.log('data>>>', data);
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
        <NavigationContainer>
          <DashboardStack />
        </NavigationContainer>
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
