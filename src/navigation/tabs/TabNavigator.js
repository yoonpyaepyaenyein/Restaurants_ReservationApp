import React from 'react';
import {View, Text} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//Component
import DashboardStack from '../stack/DashboardStack';
import COLORS from '../../utils/colorUtils';
import RestaurantIcon from '@assets/icons/restaurant';
import SettingIcon from '@assets/icons/setting';
import MapIcon from '@assets/icons/map';
import {RestaurantContext} from '../../context/context';
import MapScreen from '@pages/maps/Map';
import BookingStack from '../stack/BookingStack';
import CartIcon from '@assets/icons/cart';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const Setting = () => <Text>Settings</Text>;

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="DashboardStack"
          component={DashboardStack}
          options={{
            headerShown: false,
            title: 'Dashboard',
            tabBarIcon: ({focused, color, size}) => (
              <RestaurantIcon
                colors={focused ? COLORS.DARK_BLUE : '#000000'}
                width={hp(3)}
                height={hp(3)}
              />
            ),
            tabBarLabelStyle: {
              fontSize: hp(1.6),
              paddingBottom: hp(0.5),
            },
            tabBarActiveTintColor: COLORS.DARK_BLUE,
            tabBarInactiveTintColor: COLORS.BLACK,
          }}
        />
        <Tab.Screen
          name="Map"
          component={MapScreen}
          options={{
            headerShown: false,
            title: 'Map',
            tabBarIcon: ({focused, color, size}) => (
              <MapIcon
                colors={focused ? COLORS.DARK_BLUE : COLORS.BLACK}
                width={hp(3)}
                height={hp(3)}
              />
            ),
            tabBarLabelStyle: {
              fontSize: hp(1.6),
              paddingBottom: hp(0.5),
            },
            tabBarActiveTintColor: COLORS.DARK_BLUE,
            tabBarInactiveTintColor: COLORS.BLACK,
          }}
        />

        <Tab.Screen
          name="BookingStack"
          component={BookingStack}
          options={{
            headerShown: false,
            title: 'Booking',
            tabBarIcon: ({focused, color, size}) => (
              <CartIcon
                colors={focused ? COLORS.DARK_BLUE : '#000000'}
                width={hp(3)}
                height={hp(3)}
              />
            ),
            tabBarLabelStyle: {
              fontSize: hp(1.6),
              paddingBottom: hp(0.5),
            },
            tabBarActiveTintColor: COLORS.DARK_BLUE,
            tabBarInactiveTintColor: COLORS.BLACK,
          }}
        />
        <Tab.Screen
          name="Setting"
          component={Setting}
          options={{
            headerShown: false,
            title: 'Setting',
            tabBarIcon: ({focused, color, size}) => (
              <SettingIcon
                colors={focused ? COLORS.DARK_BLUE : COLORS.BLACK}
                width={hp(3)}
                height={hp(3)}
              />
            ),
            tabBarLabelStyle: {
              fontSize: hp(1.6),
              paddingBottom: hp(0.5),
            },
            tabBarActiveTintColor: COLORS.DARK_BLUE,
            tabBarInactiveTintColor: COLORS.BLACK,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;
