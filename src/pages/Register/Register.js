import React, {useState, useContext, useEffect} from 'react';
import {ToastAndroid} from 'react-native';

//Component
import RegisterHeader from '@components/register/registerHeader';
import {appStorage} from '../../utils/appStorage';
import {AuthContext} from '../../context/context';
import {err} from 'react-native-svg/lib/typescript/xml';

const Register = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const {auth, getAuth, getUserInfo} = useContext(AuthContext);

  const registerHandler = () => {
    let token = '1234567890';
    let userData = {
      name: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };
    if (name && email && password && password === confirmPassword) {
      try {
        appStorage.setItem('@user.data', JSON.stringify(userData));
        appStorage.setItem('@user.token', token);
        getAuth(true);
        getUserInfo(userData);
      } catch (error) {
        console.log('error', error);
      }
    } else {
      getAuth(false);
      ToastAndroid.show('Register failed!, Try Again', ToastAndroid.SHORT);
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
