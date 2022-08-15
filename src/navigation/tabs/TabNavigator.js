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
import SettingStack from '../stack/SettingStack';
import {useLocal} from '../../hook/useLocal';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const local = useLocal();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="DashboardStack"
          component={DashboardStack}
          options={{
            headerShown: false,
            title: local.Dashboard,
            tabBarIcon: ({focused, color, size}) => (
              <RestaurantIcon
                colors={focused ? COLORS.JAFFA : COLORS.SHARK}
                width={hp(3)}
                height={hp(3)}
              />
            ),
            tabBarLabelStyle: {
              fontSize: hp(1.6),
              paddingBottom: hp(0.5),
            },
            tabBarActiveTintColor: COLORS.JAFFA,
            tabBarInactiveTintColor: COLORS.SHARK,
          }}
        />
        <Tab.Screen
          name="Map"
          component={MapScreen}
          options={{
            headerShown: false,
            title: local.Map,
            tabBarIcon: ({focused, color, size}) => (
              <MapIcon
                colors={focused ? COLORS.JAFFA : COLORS.SHARK}
                width={hp(3)}
                height={hp(3)}
              />
            ),
            tabBarLabelStyle: {
              fontSize: hp(1.6),
              paddingBottom: hp(0.5),
            },
            tabBarActiveTintColor: COLORS.JAFFA,
            tabBarInactiveTintColor: COLORS.SHARK,
          }}
        />

        <Tab.Screen
          name="BookingStack"
          component={BookingStack}
          options={{
            headerShown: false,
            title: local.Booking,
            tabBarIcon: ({focused, color, size}) => (
              <CartIcon
                colors={focused ? COLORS.JAFFA : COLORS.SHARK}
                width={hp(3)}
                height={hp(3)}
              />
            ),
            tabBarLabelStyle: {
              fontSize: hp(1.6),
              paddingBottom: hp(0.5),
            },
            tabBarActiveTintColor: COLORS.JAFFA,
            tabBarInactiveTintColor: COLORS.SHARK,
          }}
        />
        <Tab.Screen
          name="SettingStack"
          component={SettingStack}
          options={{
            headerShown: false,
            title: local.Setting,
            tabBarIcon: ({focused, color, size}) => (
              <SettingIcon
                colors={focused ? COLORS.JAFFA : COLORS.SHARK}
                width={hp(3)}
                height={hp(3)}
              />
            ),
            tabBarLabelStyle: {
              fontSize: hp(1.6),
              paddingBottom: hp(0.5),
            },
            tabBarActiveTintColor: COLORS.JAFFA,
            tabBarInactiveTintColor: COLORS.SHARK,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;
