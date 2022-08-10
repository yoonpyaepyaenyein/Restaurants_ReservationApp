import React, {useContext, useEffect} from 'react';
import {ToastAndroid} from 'react-native';

//Component
import SettingHeader from '@components/setting/settingHeader';
import {AuthContext} from '../../context/context';
import {appStorage} from '../../utils/appStorage';

const Setting = ({navigation}) => {
  const {auth, getAuth, userInfo} = useContext(AuthContext);
  // useEffect(() => {
  //   console.log('userinfo>>>', userInfo);
  // }, []);

  const favouritesHandler = () => {
    navigation.navigate('SettingFavourite');
  };

  const logoutHandler = () => {
    appStorage.removeItem('@user.token');
    getAuth(false);
    ToastAndroid.show('logout successful', ToastAndroid.SHORT);
  };

  // const logoutHandler = () => {
  //   auths()
  //     .signOut()
  //     .then(
  //       () => ToastAndroid.show('Logout SuccessFul', ToastAndroid.SHORT),
  //       getAuth(false),
  //     )

  //     .catch(error => {
  //       console.log('error', error);
  //     });
  // };

  return (
    <SettingHeader
      favourites={favouritesHandler}
      logout={logoutHandler}
      data={userInfo}
    />
  );
};

export default Setting;
