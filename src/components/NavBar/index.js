import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createBottomTabNavigator();

export default function NavBar(props) {
    return (
        <Tab.Navigator initialRouteName="Landing">
          <Tab.Screen
              name="Landing"
              component={props.landingScreen}
              options={{
                  tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcon name="home" color={color} size={26}/>
                  ),
              }}
          />
          <Tab.Screen
              name="Register"
              component={props.registerScreen}
              options={{
                  tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcon name="plus-box" color={color} size={26}/>
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