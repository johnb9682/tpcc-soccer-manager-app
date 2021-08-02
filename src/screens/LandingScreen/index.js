import * as React from 'react';
import { View, ScrollView, Text, SafeAreaView } from 'react-native';

import { styles } from './style';
import { THEME_COLORS } from '../../components/theme';
import { Button, Heading, Input, Loading } from '../../components';
import { useAuthStore } from '../../shared/zustand/auth';
import { isValidEmail } from '../../components/utils';

const LandingScreen = ({ navigation }) => {
  const { login, isLoading } = useAuthStore();
  const [emailText, setEmailText] = React.useState('');
  const [passwordText, setPasswordText] = React.useState('');

  const onLoginPress = React.useCallback(() => {
    console.log(emailText);
    login(emailText, passwordText);
  });
  if (isLoading) {
    return <Loading />;
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="always"
        keyboardDismissMode="on-drag"
      >
        <Heading containerStyle={styles.heading}>Welcome</Heading>
        <View>
          <Input
            placeholder="Enter your e-mail"
            onChangeText={setEmailText}
            warningText="Invalid e-mail format"
            showWarning={emailText.length > 0 && !isValidEmail(emailText)}
          />
          <Input
            placeholder="Enter your password"
            onChangeText={setPasswordText}
            secureTextEntry={true}
          />
          <Button onPress={onLoginPress}>
            <Text style={styles.buttonText}>Log In</Text>
          </Button>
          <Button
            borderWidth={0}
            buttonColor={THEME_COLORS.WHITE}
            borderColor={THEME_COLORS.DEFAULT_BLUE_PRIMARY}
            onPress={() => navigation.navigate('Register')}
          >
            <Text
              style={[
                styles.buttonText,
                { color: THEME_COLORS.DEFAULT_BLUE_PRIMARY },
              ]}
            >
              Sign Up
            </Text>
          </Button>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default LandingScreen;
