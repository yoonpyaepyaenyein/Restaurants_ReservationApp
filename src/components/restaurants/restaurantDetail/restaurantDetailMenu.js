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

//Component
import COLORS from '../../../utils/colorUtils';
import Star from '@assets/icons/star';
import Back from '@assets/icons/back';
import Location from '@assets/icons/location';

const RestaurantDetailMenu = props => {
  const ratingArray = Array.from(new Array(props.restaurant.rating));

  return (
    <SafeAreaView>
      <View>
        <ImageBackground
          source={{uri: props.restaurant.photos}}
          resizeMode="cover"
          style={styles.imageBackground}>
          <View
            style={{
              position: 'absolute',
              top: 20,
              left: 10,
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View>
              <TouchableOpacity onPress={props.goBack}>
                <Back width={hp(3)} height={hp(3)} color={COLORS.WHITE} />
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
              <Location width={hp(3)} height={hp(3)} color={COLORS.DARK_BLUE} />
              <Text style={styles.address}>{props.restaurant.address}</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.desContainer}>
        <Text style={styles.description}>{props.restaurant.description}</Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={props.booking} style={styles.btn}>
          <Text style={styles.btnText}>book a table</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RestaurantDetailMenu;
