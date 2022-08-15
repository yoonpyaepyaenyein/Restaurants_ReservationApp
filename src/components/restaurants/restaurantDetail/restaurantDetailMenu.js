import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

//Style
import styles from './style';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import LinearGradient from 'react-native-linear-gradient';

//Component
import COLORS from '../../../utils/colorUtils';
import Star from '@assets/icons/star';
import Back from '@assets/icons/back';
import Location from '@assets/icons/location';
import {useLocal} from '../../../hook/useLocal';

const RestaurantDetailMenu = props => {
  const local = useLocal();
  const ratingArray = Array.from(new Array(props.restaurant.rating));

  return (
    <View>
      <LinearGradient
        colors={[COLORS.BLUE_VIOLET, COLORS.WHITE, COLORS.WHISPER]}>
        <View>
          <ImageBackground
            source={{uri: props.restaurant.photos}}
            resizeMode="cover"
            style={styles.imageBackground}>
            <View
              style={{
                position: 'absolute',
                top: wp(5),
                left: wp(5),
              }}>
              <View style={styles.goBackIcon}>
                <TouchableOpacity onPress={props.goBack}>
                  <Back width={hp(2.3)} height={hp(3)} color={COLORS.WHITE} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.detailContainer}>
              <View style={styles.detail}>
                <Text style={styles.title}>{props.restaurant.name}</Text>
                <Text style={styles.rating}>Rating</Text>
              </View>
              <View style={styles.ratingIcon}>
                {ratingArray.map(() => (
                  <Star
                    key={Math.random()}
                    width={hp(2.6)}
                    height={hp(3)}
                    style={styles.star}
                  />
                ))}
              </View>
              <View style={styles.location}>
                <Location
                  width={hp(3)}
                  height={hp(3)}
                  color={COLORS.BLUE_VIOLET}
                />
                <Text style={styles.address}>{props.restaurant.address}</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.desContainer}>
          <Text style={styles.desText}>Description</Text>
          <Text style={styles.description}>{props.restaurant.description}</Text>
        </View>

        <TouchableOpacity onPress={props.booking}>
          <View style={styles.bookingContainer}>
            <Text style={styles.booking}>{local.Bookings}</Text>
          </View>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default RestaurantDetailMenu;
