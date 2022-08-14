import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StatusBar,
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
import TimeIcon from '@assets/icons/time';
import PhoneIcon from '@assets/icons/phone';
import PersonIcon from '@assets/icons/person';

const BookingListContent = props => {
  const renderComponent = ({item}) => {
    return (
      <View style={styles.bookingCard}>
        <View style={styles.leftContainer}>
          <View style={styles.timeCon}>
            <TimeIcon width={hp(3)} height={hp(3)} />

            <Text style={styles.time}>{item.time}</Text>
          </View>
          <View style={styles.restaurantCon}>
            <View>
              <Text style={styles.resName}>{item.name}</Text>
              <Text style={styles.address}>{item.vicinity}</Text>
            </View>
          </View>
          <View style={styles.bookingContainer}>
            <View style={styles.bookingUserCon}>
              <PersonIcon width={hp(3)} height={hp(3)} colors="#6A6A93" />
              <Text style={styles.bookingName}>{item.bookingName}</Text>
            </View>
            <View style={styles.bookingPhNoCon}>
              <PhoneIcon width={hp(2)} height={hp(2)} color="#6A6A93" />
              <Text style={styles.phNo}>{item.phNo}</Text>
            </View>
            <View style={styles.line} />
          </View>
        </View>
        <View style={styles.rightContainer}>
          <View>
            <Image source={{uri: item.photos}} style={styles.image} />
          </View>
        </View>
        <View style={styles.updateContainer}>
          <TouchableOpacity onPress={() => props.update(item)}>
            <Text style={styles.updateTxt}>Update</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.delete(item)}>
            <Text style={styles.deleteTxt}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return props.data.length ? (
    <View>
      <LinearGradient
        colors={[COLORS.BLUE_VIOLET, COLORS.BLUE_VIOLET, COLORS.WHISPER]}
        style={styles.container}>
        <StatusBar backgroundColor={COLORS.BLUE_VIOLET} />

        <View style={styles.nameInfo}>
          <Text style={styles.name}>My Bookings</Text>
        </View>
      </LinearGradient>

      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 80}}
        data={props.data}
        renderItem={renderComponent}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  ) : (
    <View>
      <Text style={{color: COLORS.SHARK}}>Null</Text>
    </View>
  );
};

export default BookingListContent;
