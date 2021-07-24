import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createBottomTabNavigator();

export default function NavBar(props) {
    return (
        <Tab.Navigator initialRouteName="Home">
          <Tab.Screen
              name="Setting"
              component={props.settingScreen}
              options={{
                  tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcon name="cog" color={color} size={26}/>
                  ),
              }}
          />
          <Tab.Screen
              name="Home"
              component={props.homeScreen}
              options={{
                  tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcon name="home" color={color} size={26}/>
                  ),
              }}
          />
          <Tab.Screen
              name="Profile"
              component={props.profileScreen}
              options={{
                  tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcon name="account" color={color} size={26}/>
                  ),
              }}
          />
        </Tab.Navigator>
  );
}