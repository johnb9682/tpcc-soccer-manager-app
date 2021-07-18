import * as React from 'react';
import { View, ScrollView, Text, SafeAreaView } from 'react-native';

import { styles } from './style';
import { Button, Heading, Input, Loading } from '../../components';
import { useAuthStore } from '../../shared/zustand/auth';

const LandingScreen = ({ navigation }) => {
  const { login, isLoading } = useAuthStore();
  const [emailText, setEmailText] = React.useState('');
  const [passwordText, setPasswordText] = React.useState('');

  const onLoginPress = React.useCallback(() => {
    login(emailText, passwordText);
  });
  if (isLoading) {
    return <Loading />;
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardDismissMode="on-drag"
      >
        <Heading containerStyle={styles.heading}>Welcome</Heading>
        <View>
          <Input placeholder="Enter your e-mail" onChangeText={setEmailText} />
          <Input
            placeholder="Enter your password"
            onChangeText={setPasswordText}
            secureTextEntry={true}
          />
          <Button title="Log In" onPress={onLoginPress} />
          <Button
            title="Sign Up"
            onPress={() => navigation.navigate('Register')}
          />
          <Text style={styles.forgot}>Forgot Password?</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default LandingScreen;
