import * as React from 'react';
import { View, ScrollView, Text, SafeAreaView } from 'react-native';

import { styles } from './style';
import { THEME_COLORS } from '../../components/theme';
import { Button, Heading, Input, Loading } from '../../components';
import { WARNING_TYPES } from '../../components/Input/constants';
import { useAuthStore } from '../../shared/zustand/auth';

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
            showWarningRule={WARNING_TYPES.EMAIL_VALIDATION}
          />
          <Input
            placeholder="Enter your password"
            onChangeText={setPasswordText}
            secureTextEntry={true}
          />
          <Button title="Log In" onPress={onLoginPress} />
          <Button
            title="Sign Up"
            borderWidth={0}
            buttonColor={THEME_COLORS.WHITE}
            borderColor={THEME_COLORS.DEFAULT_BLUE_PRIMARY}
            textColor={THEME_COLORS.DEFAULT_BLUE_PRIMARY}
            onPress={() => navigation.navigate('Register')}
          />
          <Text style={styles.forgot}>Forgot Password?</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default LandingScreen;
