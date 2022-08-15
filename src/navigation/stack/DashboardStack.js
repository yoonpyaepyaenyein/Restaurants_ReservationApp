import React, {useLayoutEffect, useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//Component
import RestaurantInfoScreen from '@pages/Restaurants/RestaurantInfo/RestaurantInfo';
import RestaurantDetailsScreen from '@pages/Restaurants/RestaurantDetails/RestaurantDetails';
import BookingDetailScreen from '../../pages/Booking/BookingDetail/BookingDetail';
import COLORS from '../../utils/colorUtils';
import {AuthContext} from '../../context/context';

const Stack = createNativeStackNavigator();

const DashboardStack = ({navigation, route}) => {
  useLayoutEffect(() => {
    let showRouteName = [
      'DashboardStack',
      'BookingStack',
      'SettingStack',
      'Map',
      'RestaurantInfo',
      'BookingDetail',
    ];
    let routeName = getFocusedRouteNameFromRoute(route);

    if (
      showRouteName.includes(
        routeName == undefined ? 'RestaurantInfo' : routeName,
      )
    ) {
      navigation.setOptions({
        tabBarStyle: {
          display: 'flex',
        },
      });
    } else {
      navigation.setOptions({tabBarStyle: {display: 'none'}});
    }
  }, [navigation, route]);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="RestaurantInfo" component={RestaurantInfoScreen} />
      <Stack.Screen
        name="RestaurantDetails"
        component={RestaurantDetailsScreen}
      />
      <Stack.Screen name="BookingDetail" component={BookingDetailScreen} />
    </Stack.Navigator>
  );
};

export default DashboardStack;
