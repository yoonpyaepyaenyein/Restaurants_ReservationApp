import React, {useContext, useEffect} from 'react';
import {ToastAndroid} from 'react-native';

//Component
import SettingHeader from '@components/setting/settingHeader';
import {AuthContext} from '../../context/context';
import {appStorage} from '../../utils/appStorage';

const Setting = ({navigation}) => {
  const {auth, getAuth, userInfo} = useContext(AuthContext);

  const favouritesHandler = () => {
    navigation.navigate('SettingFavourite');
  };

  const logoutHandler = () => {
    appStorage.removeItem('@user.token');
    getAuth(false);
    ToastAndroid.show('logout successful', ToastAndroid.SHORT);
  };

  return (
    <SettingHeader
      favourites={favouritesHandler}
      logout={logoutHandler}
      data={userInfo}
    />
  );
};

export default Setting;
