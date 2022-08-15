import React, {useState, useContext, useEffect} from 'react';
import {ToastAndroid, TouchableOpacity, View, Text} from 'react-native';

//Style
import Styles from './Style';

//Component
import RegisterHeader from '@components/register/registerHeader';
import {appStorage} from '../../utils/appStorage';
import {AuthContext} from '../../context/context';
import {useLocal} from '../../hook/useLocal';
import AlertModal from '@components/alert/alertModal';

const Register = ({navigation}) => {
  const local = useLocal();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showModal, setShowModal] = useState(false);

  const {auth, getAuth, getUserInfo, changeLanguage, lang} =
    useContext(AuthContext);

  const registerHandler = () => {
    navigation.navigate('Onboarding');
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
        navigation.navigate('Onboarding');
        getAuth(true);
        getUserInfo(userData);
        ToastAndroid.show(local.registerSuccess, ToastAndroid.SHORT);
      } catch (error) {
        console.log('error', error);
      }
    } else {
      getAuth(false);
      ToastAndroid.show(local.SomethingWrong, ToastAndroid.SHORT);
    }
  };

  const changeLanguageHandler = value => {
    appStorage.setItem('@language', value);
    changeLanguage(value);
    setShowModal(false);
  };

  const languageHandler = () => {
    setShowModal(true);
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.headerStyle}>
        <TouchableOpacity style={{padding: 5}} onPress={languageHandler}>
          {lang === 'en' ? (
            <Text style={{color: '#7357B8', fontFamily: 'Montserrat-Regular'}}>
              English
            </Text>
          ) : (
            <Text style={{color: '#7357B8', fontFamily: 'Montserrat-Regular'}}>
              Myanmar
            </Text>
          )}
        </TouchableOpacity>
      </View>

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
      {showModal && (
        <AlertModal
          languageAction={value => changeLanguageHandler(value)}
          selectedLang={lang}
        />
      )}
    </View>
  );
};

export default Register;
