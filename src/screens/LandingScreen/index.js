import * as React from 'react';
import { View, Text } from 'react-native';

import { styles } from './style';
import { Button, Heading } from '../../components';

const LandingScreen = () => {
  return (
    <View style={styles.container}>
      <Heading
        text="Welcome"
        containerStyle={{ padding: 40, alignItems: 'flex-start' }}
      />
      <View>
        <Button title="Log In" />
        <Button title="Sign Up" />
        <Text style={styles.forgot}>Forgot Password?</Text>
      </View>
    </View>
  );
};
export default LandingScreen;
