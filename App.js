import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';

import { THEME_COLORS } from './src/components/theme';
import { useAuthStore } from './src/shared/zustand/auth';
import { Loading } from './src/components';
import HomeScreen from './src/screens/HomeScreen';
import LandingScreen from './src/screens/LandingScreen';
import RegisterScreen from './src/screens/AccountScreens/RegisterScreen';

const Stack = createStackNavigator();

const App = () => {
  const { isLoading, signedIn } = useAuthStore();

  if (isLoading) {
    return <Loading />;
  }
  if (!signedIn) {
    return (
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
          <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor={THEME_COLORS.WHITE}
      />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
