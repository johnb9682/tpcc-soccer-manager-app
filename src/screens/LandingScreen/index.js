import * as React from 'react';
import { View, ScrollView, Text, SafeAreaView } from 'react-native';
import Toast from 'react-native-toast-message';

import { styles } from './style';
import { THEME_COLORS } from '../../components/theme';
import { Button, Heading, Input, Loading } from '../../components';
import { useAuthStore } from '../../shared/zustand/auth';
import { isValidEmail } from '../../components/utils';
import { TOAST_UP_OFFSET } from '../../components/constants';

const LandingScreen = ({ navigation, route }) => {
  const { login, isLoading } = useAuthStore();
  const [emailText, setEmailText] = React.useState('');
  const [passwordText, setPasswordText] = React.useState('');
  const [isLoginEnabled, setIsLoginEnabled] = React.useState(false);

  const handleOnLogin = React.useCallback(async () => {
    const errorMessage = await login(emailText, passwordText);
    if (errorMessage !== null) {
      Toast.show({
        type: 'error',
        text1: 'Login Failed',
        text2: errorMessage,
        topOffset: TOAST_UP_OFFSET,
      });
    }
  }, [emailText, passwordText]);

  React.useEffect(() => {
    if (isValidEmail(emailText) && passwordText.length >= 6) {
      setIsLoginEnabled(true);
    } else {
      setIsLoginEnabled(false);
    }
  }, [emailText, passwordText]);

  React.useEffect(() => {
    if (route.params) {
      setEmailText(route.params.emailText);
      setPasswordText(route.params.passwordText);
    }
  }, [route, setEmailText, setPasswordText]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="always"
        keyboardDismissMode="on-drag"
      >
        {isLoading && (
          <View style={styles.loadingContainer}>
            <Loading showText={isLoading} />
          </View>
        )}
        <Heading containerStyle={styles.heading}>Welcome</Heading>
        <View>
          <Input
            value={emailText}
            placeholder="Enter your e-mail"
            onInput={setEmailText}
            warningText="Invalid e-mail format"
            showWarning={emailText.length > 0 && !isValidEmail(emailText)}
          />
          <Input
            value={passwordText}
            placeholder="Enter your password"
            onInput={setPasswordText}
            secureTextEntry={true}
          />

          <Button onPress={handleOnLogin} disabled={!isLoginEnabled}>
            <Text style={styles.buttonText}>Log In</Text>
          </Button>
          <Button
            borderWidth={0}
            buttonColor={THEME_COLORS.WHITE}
            borderColor={THEME_COLORS.DEFAULT_BLUE_PRIMARY}
            onPress={() => {
              setEmailText('');
              setPasswordText('');
              navigation.navigate('Register');
            }}
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
