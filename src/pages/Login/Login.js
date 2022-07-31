import React, {useState, useContext} from 'react';
import {View, Text, ToastAndroid} from 'react-native';
import auths from '@react-native-firebase/auth';

//Style
import Styles from './Style';

//Components
import LoginHeader from '@components/login/loginHeader';
import {appStorage} from '../../utils/appStorage';
import {AuthContext} from '../../context/context';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {auth, getAuth, deviceToken} = useContext(AuthContext);

  const loginHandler = () => {
    auths()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account signed success!');
        appStorage.setItem('@device.token', deviceToken);

        getAuth(true);
        ToastAndroid.show('Login Successful', ToastAndroid.SHORT);
      })
      .catch(error => {
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
          ToastAndroid.show(
            'That email address is invalid!',
            ToastAndroid.SHORT,
          );
        }

        console.error(error);
      });
  };

  return (
    <LoginHeader
      emailValue={email}
      onChangeEmail={value => setEmail(value)}
      passValue={password}
      onChangePass={value => setPassword(value)}
      goLogin={loginHandler}
      goRegister={() => navigation.navigate('Register')}
    />
  );
};

export default Login;
