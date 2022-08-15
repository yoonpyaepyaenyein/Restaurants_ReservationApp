import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

//Style
import styles from './style';
import COLORS from '../../utils/colorUtils';
import LinearGradient from 'react-native-linear-gradient';
import {useLocal} from '../../hook/useLocal';

const RegisterHeader = props => {
  const local = useLocal();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello !</Text>
      <Text style={styles.welcome}>Signup to</Text>
      <Text style={styles.back}>Get Started</Text>

      {/* <Text style={styles.subTitle}>Create A New Account</Text> */}

      {/* input Section */}
      <View style={styles.inputContainer}>
        <TextInput
          value={props.userName}
          placeholder={local.userName}
          placeholderTextColor={COLORS.GRAY}
          style={styles.emailInput}
          onChangeText={props.onChangeName}
        />
        <TextInput
          value={props.emailValue}
          placeholder={local.emailPlaceholder}
          placeholderTextColor={COLORS.GRAY}
          style={styles.emailInput}
          onChangeText={props.onChangeEmail}
        />
        <TextInput
          value={props.passValue}
          placeholder={local.passwordPlaceholder}
          placeholderTextColor={COLORS.GRAY}
          style={styles.emailInput}
          onChangeText={props.onChangePass}
          secureTextEntry={true}
        />
        <TextInput
          value={props.confirmPassValue}
          placeholder={local.confirmPasswordPlaceholder}
          placeholderTextColor={COLORS.GRAY}
          style={styles.emailInput}
          onChangeText={props.onChangeConfirmPass}
          secureTextEntry={true}
        />
      </View>

      {/* button Section */}
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={props.goRegister}>
          <LinearGradient
            colors={[COLORS.KIMBERLY, COLORS.BLUE_VIOLET, COLORS.GRADIENT_1]}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.btnContent}>
            <Text style={styles.loginText}>{local.register}</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <View style={styles.qContainer}>
        <Text style={styles.qText}>{local.loginText} </Text>
        <TouchableOpacity
          style={styles.regTextContainer}
          onPress={props.goLogin}>
          <Text style={styles.regText}>{local.login}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterHeader;
