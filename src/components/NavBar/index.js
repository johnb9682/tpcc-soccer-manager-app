import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import { THEME_COLORS } from '../theme';

const Tab = createBottomTabNavigator();

export default function NavBar({ eventHomeScreen, homeScreen, profileScreen }) {
  return (
    <Tab.Navigator
      initialRouteName="Events"
      tabBarOptions={{
        activeTintColor: THEME_COLORS.DEFAULT_BLUE_PRIMARY,
        backgroundColor: 'transparent',
      }}
    >
      <Tab.Screen
        name="Events"
        component={eventHomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcon
              name="calendar-multiple"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Teams"
        component={homeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcon
              name="account-multiple"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="My Profile"
        component={profileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcon
              name="account-circle"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
