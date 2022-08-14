import React, {useState, useContext} from 'react';
import {ToastAndroid, View, TouchableOpacity, Text} from 'react-native';

//Style
import Styles from './Style';

//Components
import LoginHeader from '@components/login/loginHeader';
import {appStorage} from '../../utils/appStorage';
import {AuthContext} from '../../context/context';
import AlertModal from '../../components/alert/alertModal';
import {useLocal} from '../../hook/useLocal';

const Login = ({navigation}) => {
  const local = useLocal();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);

  const {auth, getAuth, getUserInfo, changeLanguage, lang} =
    useContext(AuthContext);

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
          ToastAndroid.show('loginSuccess', ToastAndroid.SHORT);
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
      <LoginHeader
        emailValue={email}
        onChangeEmail={value => setEmail(value)}
        passValue={password}
        onChangePass={value => setPassword(value)}
        goLogin={loginHandler}
        goRegister={() => navigation.navigate('Register')}
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

export default Login;
