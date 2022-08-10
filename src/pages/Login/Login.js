import React, {useState, useContext} from 'react';
import {ToastAndroid} from 'react-native';

//Components
import LoginHeader from '@components/login/loginHeader';
import {appStorage} from '../../utils/appStorage';
import {AuthContext} from '../../context/context';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {auth, getAuth, getUserInfo} = useContext(AuthContext);

  const loginHandler = () => {
    let token = '1234567890';

    try {
      const data = appStorage.getItem('@user.data');
      if (data) {
        const formatData = JSON.parse(data);
        if (formatData.email === email && formatData.password === password) {
          getAuth(true);
          getUserInfo(formatData);
          appStorage.setItem('@user.token', token);
          ToastAndroid.show(loginSuccess, ToastAndroid.SHORT);
        } else {
          ToastAndroid.show('Something Wrong', ToastAndroid.SHORT);
        }
      } else {
        ToastAndroid.show('Try Again', ToastAndroid.SHORT);
      }
    } catch (error) {
      console.log('error', error);
    }
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
