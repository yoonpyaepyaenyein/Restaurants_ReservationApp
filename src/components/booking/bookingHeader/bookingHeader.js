import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

//Style
import styles from './style';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

//Component
import Back from '../../../../assets/icons/back';
import COLORS from '../../../utils/colorUtils';

const BookingHeader = props => {
  const renderComponent = ({item}) => {
    return (
      <View style={styles.bookingCard}>
        <Image source={{uri: item.photos[0]}} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.address}>{item.vicinity}</Text>
          <Text style={styles.name}>{item.bookingName}</Text>
          <Text style={styles.address}>{item.phNo}</Text>
        </View>
        <View
          style={{
            marginRight: 20,
            alignItems: 'center',
            height: wp(18),
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity>
            <Text style={{color: COLORS.LIGHT_BLUE, paddingTop: wp(3)}}>
              Update
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.delete(item)}>
            <Text style={{color: COLORS.LIGHT_BLUE}}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{backgroundColor: COLORS.WHITE, flex: 1}}>
      <View style={styles.header}>
        <Back width={hp(3)} height={hp(3)} color={COLORS.DARK_BLUE} />
        <Text style={styles.title}>BookingList</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 80}}
        data={props.data}
        renderItem={renderComponent}
      />
    </SafeAreaView>
  );
};

export default BookingHeader;
