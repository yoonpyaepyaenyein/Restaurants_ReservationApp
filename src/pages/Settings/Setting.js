import React, {useContext} from 'react';
import {ToastAndroid} from 'react-native';

//Component
import SettingHeader from '@components/setting/settingHeader';
import {AuthContext} from '../../context/context';
import {appStorage} from '../../utils/appStorage';
import {useLocal} from '../../hook/useLocal';

const Setting = ({navigation}) => {
  const local = useLocal();
  const {auth, getAuth, userInfo} = useContext(AuthContext);

  const favouritesHandler = () => {
    navigation.navigate('SettingFavourite');
  };

  const logoutHandler = () => {
    appStorage.removeItem('@user.token');
    getAuth(false);
    ToastAndroid.show(local.LogoutSuccess, ToastAndroid.SHORT);
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
