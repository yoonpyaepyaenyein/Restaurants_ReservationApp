import React, {useEffect} from 'react';
import {View, Text, TextInput, FlatList} from 'react-native';
import {Card} from 'react-native-paper';

//Style
import styles from './style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//Component
import COLORS from '../../../utils/colorUtils';
import Star from '@assets/icons/star';
import Open from '@assets/icons/open';

const RestaurantInfoCard = ({restaurant = {}}) => {
  const {
    name = 'KFC',
    icon,
    photos = 'https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg',
    address = 'HleDen',
    rating = 4,
    isOpenNow = true,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  // console.log(ratingArray);
  return (
    <View style={styles.cardContainer}>
      <Card elevation={5} style={styles.card}>
        <Card.Cover key={name} style={styles.cover} source={{uri: photos[0]}} />
        <View style={styles.info}>
          <Text style={styles.title}>{name}</Text>

          {/* card info */}
          <View style={styles.section}>
            <View style={styles.rating}>
              {ratingArray.map((_, i) => (
                <Star
                  // key={`star-${placeId}-{i}`}
                  key={Math.random()}
                  width={hp(2.6)}
                  height={hp(3)}
                  style={styles.star}
                />
              ))}
            </View>
            <View style={styles.sectionEnd}>
              {isClosedTemporarily && (
                <Text
                  style={{
                    color: 'red',
                    paddingTop: wp(1.4),
                    paddingRight: wp(2),
                  }}>
                  CLOSE TEMPORARILY
                </Text>
              )}

              <View>
                {isOpenNow && (
                  <Open width={hp(4)} height={hp(4)} style={styles.open} />
                )}
              </View>
            </View>
          </View>

          <Text style={styles.address}>{address}</Text>
        </View>
      </Card>
    </View>
  );
};

export default RestaurantInfoCard;
