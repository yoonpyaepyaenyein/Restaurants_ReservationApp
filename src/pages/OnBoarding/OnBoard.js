import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import slides from '../../data/slide';
import COLORS from '../../utils/colorUtils';
import Styles from './Style';

const OnBoard = ({navigation}) => {
  const [viewOnboarding, setViewedOnboarding] = useState(false);
  const buttonLabel = label => {
    return (
      <View style={{padding: wp(4.2)}}>
        <Text style={Styles.label}>{label}</Text>
      </View>
    );
  };

  const checkOnboarding = async () => {
    try {
    } catch (error) {}
  };

  return (
    <View style={Styles.container}>
      <AppIntroSlider
        data={slides}
        renderItem={({item}) => {
          return (
            <View style={Styles.infoContainer}>
              <Image
                source={item.image}
                style={Styles.image}
                resizeMode="contain"
              />

              <Text style={Styles.title}>{item.title}</Text>
              <Text style={Styles.description}>{item.description}</Text>
            </View>
          );
        }}
        activeDotStyle={Styles.active}
        showSkipButton
        renderNextButton={() => buttonLabel('Next')}
        renderSkipButton={() => buttonLabel('Skip')}
        renderDoneButton={() => buttonLabel('Done')}
        onDone={() => {
          navigation.navigate('Welcome');
        }}
      />
    </View>
  );
};

export default OnBoard;
