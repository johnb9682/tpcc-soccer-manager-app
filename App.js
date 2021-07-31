import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import Toast from 'react-native-toast-message';

import { THEME_COLORS } from './src/components/theme';
import { useAuthStore } from './src/shared/zustand/auth';
import { Loading } from './src/components';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/AccountScreens/ProfileScreen';
import LandingScreen from './src/screens/LandingScreen';
import RegisterScreen from './src/screens/AccountScreens/RegisterScreen';
import SettingScreen from './src/screens/SettingScreens';
import NavBar from './src/components/NavBar';

const Stack = createStackNavigator();

const App = () => {
  const { isLoading, signedIn } = useAuthStore();

  if (isLoading) {
    return <Loading />;
  }
  if (!signedIn) {
    return (
      <>
        <NavigationContainer>
          <StatusBar
            barStyle="dark-content"
            translucent={true}
            backgroundColor={THEME_COLORS.WHITE}
          />
          <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen
              name="Landing"
              component={LandingScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options={{
                headerBackTitleVisible: false,
                headerTitleAlign: 'center',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
        <Toast ref={ref => Toast.setRef(ref)} />
      </>
    );
  }
  return (
    <>
      <NavigationContainer>
        <StatusBar
          barStyle="dark-content"
          translucent={true}
          backgroundColor={THEME_COLORS.WHITE}
        />
        <NavBar
          settingScreen={SettingScreen}
          homeScreen={HomeScreen}
          profileScreen={ProfileScreen}
        />
      </NavigationContainer>
      <Toast ref={ref => Toast.setRef(ref)} />
    </>
  );
};

export default App;
