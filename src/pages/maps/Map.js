import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import MapView, {Callout, Marker} from 'react-native-maps';

//Style
import Styles from './Style';
import COLORS from '../../utils/colorUtils';

//Component
import {RestaurantContext} from '../../context/context';
import MapCallout from '@components/map/mapCallout';

const Map = ({navigation}) => {
  const {restaurants = []} = useContext(RestaurantContext);

  const yangonRegion = {
    latitude: 16.871311,
    longitude: 96.199379,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <View style={Styles.container}>
      <MapView style={Styles.map} initialRegion={yangonRegion}>
        {restaurants.map(restaurant => {
          return (
            <Marker
              key={restaurant.name}
              title={restaurant.name}
              pinColor={COLORS.DARK_BLUE}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}>
              <Callout
                onPress={() =>
                  navigation.navigate('RestaurantDetails', {
                    restaurant: restaurant,
                  })
                }>
                <MapCallout data={restaurant} />
              </Callout>
            </Marker>
          );
        })}
      </MapView>
    </View>
  );
};

export default Map;
