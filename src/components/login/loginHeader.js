import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

//Style
import styles from './style';

import COLORS from '../../utils/colorUtils';
import LinearGradient from 'react-native-linear-gradient';

const LoginHeader = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to BUTTER</Text>

      <Text style={styles.subTitle}>Sign in to your account</Text>

      {/* input Section */}
      <View style={styles.inputContainer}>
        <TextInput
          value={props.emailValue}
          placeholder="Email"
          placeholderTextColor={COLORS.GRAY}
          style={styles.emailInput}
          onChangeText={props.onChangeEmail}
        />
        <TextInput
          value={props.passValue}
          placeholder="Password"
          placeholderTextColor={COLORS.GRAY}
          style={styles.emailInput}
          onChangeText={props.onChangePass}
          secureTextEntry={true}
        />
      </View>

      {/* button Section */}
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={props.goLogin}>
          <LinearGradient
            colors={[COLORS.GRADIENT_3, COLORS.GRADIENT_3, COLORS.GRADIENT_1]}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.btnContent}>
            <Text style={styles.loginText}>Login</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <View style={styles.qContainer}>
        <Text style={styles.qText}>Don't have an account? </Text>
        <TouchableOpacity
          style={styles.regTextContainer}
          onPress={props.goRegister}>
          <Text style={styles.regText}>REGISTER</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginHeader;
