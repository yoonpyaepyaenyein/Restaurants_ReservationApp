import React, {useState, useContext} from 'react';
import {View, Text, ToastAndroid} from 'react-native';
import auths from '@react-native-firebase/auth';

//Style
import Styles from './Style';

//Component
import RegisterHeader from '@components/register/registerHeader';
import {appStorage} from '../../utils/appStorage';
import {AuthContext} from '../../context/context';

const Register = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const {deviceToken, auth, getAuth} = useContext(AuthContext);

  const registerHandler = () => {
    let userData = {
      name: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };
    if (email && password) {
      auths()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          console.log('User account create & signed in!');
          appStorage.setItem('@device.token', deviceToken);
          getAuth(true);
          ToastAndroid.show('Registration Successfully', ToastAndroid.SHORT);
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
            ToastAndroid.show(
              'That email address is already in use!',
              ToastAndroid.SHORT,
            );
          }

          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
            ToastAndroid.show(
              'That email address is invalid!',
              ToastAndroid.SHORT,
            );
          }

          console.error(error);
        });
    }
  };

  return (
    <RegisterHeader
      userName={name}
      onChangeName={value => setName(value)}
      emailValue={email}
      onChangeEmail={value => setEmail(value)}
      passValue={password}
      onChangePass={value => setPassword(value)}
      confirmPassValue={confirmPassword}
      onChangeConfirmPass={value => setConfirmPassword(value)}
      goRegister={registerHandler}
      goLogin={() => navigation.navigate('Login')}
    />
  );
};

export default Register;
