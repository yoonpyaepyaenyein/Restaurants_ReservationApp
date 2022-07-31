import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

//Style
import styles from './style';
import COLORS from '../../utils/colorUtils';
import LinearGradient from 'react-native-linear-gradient';

const RegisterHeader = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to BUTTER</Text>

      <Text style={styles.subTitle}>Create A New Account</Text>

      {/* input Section */}
      <View style={styles.inputContainer}>
        <TextInput
          value={props.userName}
          placeholder="Username"
          placeholderTextColor={COLORS.GRAY}
          style={styles.emailInput}
          onChangeText={props.onChangeName}
        />
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
        <TextInput
          value={props.confirmPassValue}
          placeholder="Confirm Password"
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
            colors={[COLORS.GRADIENT_3, COLORS.GRADIENT_3, COLORS.GRADIENT_1]}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.btnContent}>
            <Text style={styles.loginText}>Register</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <View style={styles.qContainer}>
        <Text style={styles.qText}>Already have an account? </Text>
        <TouchableOpacity
          style={styles.regTextContainer}
          onPress={props.goLogin}>
          <Text style={styles.regText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterHeader;
