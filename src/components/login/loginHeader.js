import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

//Style
import styles from './style';

//Component
import {useLocal} from '../../hook/useLocal';
import COLORS from '../../utils/colorUtils';

const LoginHeader = props => {
  const local = useLocal();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello!</Text>
      <Text style={styles.welcome}>This is EATERY ~_~</Text>
      <Text style={styles.back}>Let's find out . . .</Text>

      {/* <Text style={styles.subTitle}>Sign in to your account</Text> */}

      {/* input Section */}
      <View style={styles.inputContainer}>
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
      </View>

      {/* button Section */}
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={props.goLogin}>
          <LinearGradient
            colors={[COLORS.KIMBERLY, COLORS.BLUE_VIOLET, COLORS.GRADIENT_1]}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
            style={styles.btnContent}>
            <Text style={styles.loginText}>{local.login}</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <View style={styles.qContainer}>
        <Text style={styles.qText}>{local.registerText} </Text>
        <TouchableOpacity
          style={styles.regTextContainer}
          onPress={props.goRegister}>
          <Text style={styles.regText}>{local.register}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginHeader;
