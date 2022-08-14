import React, {useContext, useEffect} from 'react';
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
    latitudeDelta: 0.1345,
    longitudeDelta: 0.1367,
  };

  useEffect(() => {
    // console.log('res::::', restaurants);
  }, []);

  return (
    <View style={Styles.container}>
      <MapView style={Styles.map} initialRegion={yangonRegion}>
        {restaurants.map(restaurant => {
          return (
            <Marker
              key={restaurant.name}
              title={restaurant.name}
              pinColor="#E98B43"
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}>
              <Callout
                onPress={() =>
                  navigation.navigate('RestaurantDetails', {
                    restaurant,
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
