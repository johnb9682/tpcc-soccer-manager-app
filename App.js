import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import Toast from 'react-native-toast-message';

import { THEME_COLORS } from './src/components/theme';
import { useAuthStore } from './src/shared/zustand/auth';
import ProfileScreen from './src/screens/AccountScreens/ProfileScreen';
import LandingScreen from './src/screens/LandingScreen';
import RegisterScreen from './src/screens/AccountScreens/RegisterScreen';
import EventHomeScreen from './src/screens/EventScreens/EventHomeScreen';
import CreateEventScreen from './src/screens/EventScreens/CreateEventScreen';
import SettingScreen from './src/screens/SettingScreens';
import TeamHomeScreen from './src/screens/TeamScreens/TeamHomeScreen';
import CreateTeamScreen from './src/screens/TeamScreens/CreateTeamScreen';
import TeamScreen from './src/screens/TeamScreens/TeamScreen';
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
        options={({ route }) => ({
          title: route.params.teamName,
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,
        })}
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
            backgroundColor={THEME_COLORS.WHITE}
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
          backgroundColor={THEME_COLORS.WHITE}
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
