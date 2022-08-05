import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {Card} from 'react-native-paper';

//Style
import styles from './style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//Component
import Star from '@assets/icons/star';
import Open from '@assets/icons/open';
import Favourite from '@pages/Favourites/FavouriteToggle/Favourite';

const RestaurantInfoCard = props => {
  useEffect(() => {
    // console.log('PROPS>>>', props.restaurant.rating);
  }, []);

  const ratingArray = Array.from(new Array(props.restaurant.rating));

  return (
    <View style={styles.cardContainer}>
      <Card elevation={5} style={styles.card}>
        <View>
          {/* favourite */}
          <Favourite restaurant={props.restaurant} />

          <Card.Cover
            key={props.restaurant.name}
            style={styles.cover}
            source={{uri: props.restaurant.photos[0]}}
          />
        </View>
        <View style={styles.info}>
          <Text style={styles.title}>{props.restaurant.name}</Text>

          {/* card info */}
          <View style={styles.section}>
            <View style={styles.rating}>
              {ratingArray.map(() => (
                <Star
                  // key={`star-${placeI}-{i}`}
                  key={Math.random()}
                  width={hp(2.6)}
                  height={hp(3)}
                  style={styles.star}
                />
              ))}
            </View>
            <View style={styles.sectionEnd}>
              {props.restaurant.isClosedTemporarily && (
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
                {props.restaurant.isOpenNow && (
                  <Open width={hp(4)} height={hp(4)} style={styles.open} />
                )}
              </View>
            </View>
          </View>

          <Text style={styles.address}>{props.restaurant.address}</Text>
        </View>
      </Card>
    </View>
  );
};

export default RestaurantInfoCard;
