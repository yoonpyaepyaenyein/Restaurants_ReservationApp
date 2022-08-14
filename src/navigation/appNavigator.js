import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import Lottie from 'lottie-react-native';

//Component
import AuthStack from './stack/AuthStack';
import {AuthContext} from '../context/context';
import {appStorage} from '../utils/appStorage';
import {RestaurantContext} from '../context/context';
import {FavouriteContext} from '../context/context';
import store from '../store';

import TabNavigator from './tabs/TabNavigator';
import AnimatedLottieView from 'lottie-react-native';

const AppNavigator = () => {
  const [auth, setAuth] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [splash, setSplash] = useState(true);
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [favourite, setFavourite] = useState([]);
  const [lang, setLang] = useState('en');

  /*Auth Context*/
  const context = {
    auth,
    getAuth: value => {
      setAuth(value);
    },

    userInfo,
    getUserInfo: value => {
      setUserInfo(value);
    },
    lang,
    changeLanguage: value => {
      setLang(value);
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

  //  Storing Favourite
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
    loadFavourites();
    SplashScreen.hide();
  }, []);

  useEffect(() => {
    saveFavourites(favourite);
  }, [favourite]);

  /*Authentication*/
  const getData = () => {
    try {
      const data = appStorage.getItem('@user.token');
      const userData = appStorage.getItem('@user.data');
      const storeLang = appStorage.getItem('@language');
      setLang(storeLang);

      if (data) {
        setAuth(true);
        setUserInfo(JSON.parse(userData));
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
      <View
        style={{
          flex: 1,
          backgroundColor: '#F4F4F7',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Lottie
          source={require('../../assets/images/splash1.json')}
          autoPlay
          loop={false}
          speed={0.5}
        />
      </View>
    );
  } else if (auth) {
    return (
      <Provider store={store}>
        <AuthContext.Provider value={context}>
          <FavouriteContext.Provider value={favouriteContext}>
            <RestaurantContext.Provider value={restaurantContext}>
              <TabNavigator />
            </RestaurantContext.Provider>
          </FavouriteContext.Provider>
        </AuthContext.Provider>
      </Provider>
    );
  } else {
    return (
      <Provider store={store}>
        <AuthContext.Provider value={context}>
          <NavigationContainer>
            <AuthStack />
          </NavigationContainer>
        </AuthContext.Provider>
      </Provider>
    );
  }
};

export default AppNavigator;
