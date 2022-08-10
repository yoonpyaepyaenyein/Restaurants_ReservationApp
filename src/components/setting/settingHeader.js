import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';

import {List} from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//Style
import styles from './style';

//Component
import COLORS from '../../utils/colorUtils';
import HeartIcon from '@assets/icons/heart';
import LogoutIcon from '@assets/icons/logout';
import AvatarIcon from '@assets/icons/avatar';

const SettingHeader = props => {
  return (
    <View style={styles.container}>
      {/* Avatar */}
      <View style={styles.avatarContainer}>
        <AvatarIcon width={hp(10)} height={hp(10)} />
        <Text style={styles.mail}>{props.data.name}</Text>
        <Text
          style={{
            paddingTop: wp(3),
            color: COLORS.BLACK,
            fontFamily: 'Montserrat-Regular',
            fontSize: wp(2.6),
            paddingTop: wp(-1),
          }}>
          {props.data.email}
        </Text>
      </View>

      {/* Favourite */}

      <View style={styles.favContainer}>
        <View style={styles.heart}>
          <HeartIcon width={hp(5)} height={hp(5)} colors={COLORS.BLACK} />
        </View>
        <TouchableOpacity onPress={props.favourites}>
          <View style={styles.text}>
            <Text style={styles.favText}>Favourites</Text>
            <Text style={styles.favText}>View to your favourites</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Logout */}

      <View style={styles.logoutContainer}>
        <View style={styles.logout}>
          <LogoutIcon width={hp(5)} height={hp(5)} colors={COLORS.BLACK} />
        </View>
        <TouchableOpacity onPress={props.logout}>
          <View style={styles.logoutText}>
            <Text style={styles.signOut}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SettingHeader;
