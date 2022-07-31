import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Animated, Easing} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';

//Style
import styles from './style';

//Component
import COLORS from '../../utils/colorUtils';
import OrangeButton from '@components/orangeButton/orangeButton';

const Welcome = ({navigation}) => {
  const [startClicked, setStartClicked] = useState(false);
  const [bottomFlex, setBottomFlex] = useState(new Animated.Value(1));

  useEffect(() => {
    if (startClicked) {
      Animated.timing(bottomFlex, {
        toValue: 4,
        duration: 250,
        useNativeDriver: false,
        easing: Easing.linear,
      }).start();
    } else {
      Animated.timing(bottomFlex, {
        toValue: 1,
        duration: 250,
        useNativeDriver: false,
        easing: Easing.linear,
      }).start();
    }
  }, [startClicked]);

  return (
    <LinearGradient
      colors={[COLORS.GRADIENT_1, COLORS.GRADIENT_2, COLORS.GRADIENT_3]}
      style={styles.container}>
      <View style={styles.topPart}>
        <Text style={styles.bookTextStyle}>BUTTER</Text>
        {/* <Text style={styles.bookTextStyle}>TER</Text> */}
      </View>
      <Animated.View style={[styles.bottomPart, {flex: bottomFlex}]}>
        {startClicked ? (
          <View style={styles.authButton}>
            <OrangeButton
              text="Login"
              startCLick={() => navigation.navigate('Login')}
            />

            <View style={styles.oRContainer}>
              <Text style={styles.oRText}>OR</Text>
            </View>

            <OrangeButton
              text="Register"
              startCLick={() => navigation.navigate('Register')}
            />
          </View>
        ) : (
          <OrangeButton
            startCLick={() => setStartClicked(true)}
            text="Start With Us"
          />
        )}
      </Animated.View>
    </LinearGradient>
  );
};

export default Welcome;
