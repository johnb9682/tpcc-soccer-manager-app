import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import Toast from 'react-native-toast-message';

import { useAuthStore } from './src/shared/zustand/auth';
import ProfileScreen from './src/screens/AccountScreens/ProfileScreen';
import LandingScreen from './src/screens/LandingScreen';
import RegisterScreen from './src/screens/AccountScreens/RegisterScreen';
import EventHomeScreen from './src/screens/EventScreens/EventHomeScreen';
import CreateEventScreen from './src/screens/EventScreens/CreateEventScreen';
import EventDetailScreen from './src/screens/EventScreens/EventDetailScreen';
import EventInviteScreen from './src/screens/EventScreens/EventInviteScreen';
import SettingScreen from './src/screens/SettingScreens';
import TeamHomeScreen from './src/screens/TeamScreens/TeamHomeScreen';
import CreateTeamScreen from './src/screens/TeamScreens/CreateTeamScreen';
import TeamScreen from './src/screens/TeamScreens/TeamScreen';
import NotificationScreen from './src/screens/NotificationScreen';
import InviteMemberScreen from './src/screens/TeamScreens/InviteMemberScreen';
import NavBar from './src/components/NavBar';

const Stack = createStackNavigator();

const Team = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='TeamHome'
        component={TeamHomeScreen}
        options={{
          title: 'Teams',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name='CreateTeam'
        component={CreateTeamScreen}
        options={{
          title: 'Create a Team',
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name='Team'
        component={TeamScreen}
        options={{
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name='TeamNotification'
        component={NotificationScreen}
        options={{
          title: 'Notifications',
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name='InviteMember'
        component={InviteMemberScreen}
        options={{
          title: 'Invite a Member',
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

const Profile = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          title: 'My Profile',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name='Setting'
        component={SettingScreen}
        options={{
          title: 'Settings',
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};

const Event = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='EventHome'
        component={EventHomeScreen}
        options={{
          title: 'Events',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name='CreateEvent'
        component={CreateEventScreen}
        options={{
          title: 'Create an Event',
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name='EventDetail'
        component={EventDetailScreen}
        options={{
          title: 'Event Detail',
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name='EventInvite'
        component={EventInviteScreen}
        options={{
          title: 'Invite new participants',
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  const { signedIn, initialize } = useAuthStore();

  React.useEffect(() => {
    initialize();
  }, []);

  if (!signedIn) {
    return (
      <>
        <NavigationContainer>
          <StatusBar
            barStyle='dark-content'
            translucent={true}
            backgroundColor={'transparent'}
          />
          <Stack.Navigator initialRouteName='Landing'>
            <Stack.Screen
              name='Landing'
              component={LandingScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name='Register'
              component={RegisterScreen}
              options={{
                headerBackTitleVisible: false,
                headerTitleAlign: 'center',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </>
    );
  }
  return (
    <>
      <NavigationContainer>
        <StatusBar
          barStyle='dark-content'
          translucent={true}
          backgroundColor={'transparent'}
        />
        <NavBar
          eventHomeScreen={Event}
          teamHomeScreen={Team}
          profileScreen={Profile}
        />
      </NavigationContainer>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </>
  );
};

export default App;
