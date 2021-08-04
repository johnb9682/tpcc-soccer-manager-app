import React from 'react';
import { View, SafeAreaView, ScrollView, Text } from 'react-native';
import Toast from 'react-native-toast-message';

import { styles } from './style';
import { Button, Heading, Input, Loading, Info } from '../../../components';
import { TOAST_UP_OFFSET } from '../../../components/constants';
import { useAuthStore } from '../../../shared/zustand/auth';
import { isValidEmail } from '../../../components/utils';

const Register = ({ navigation }) => {
  const { isLoading, signUp } = useAuthStore();
  const [userNameText, setUserNameText] = React.useState('');
  const [emailText, setEmailText] = React.useState('');
  const [passwordText, setPasswordText] = React.useState('');
  const [confirmPasswordText, setConfirmPasswordText] = React.useState('');
  const [isSignUpEnabled, setSignUpEnabled] = React.useState(false);

  const onSignUpPress = React.useCallback(async () => {
    const result = await signUp(userNameText, emailText, passwordText);
    const toastTitle =
      result.status === 'success'
        ? 'Congratulations'
        : result.status === 'info'
        ? 'Uh-Oh'
        : 'Something went wrong';
    Toast.show({
      type: result.status,
      text1: toastTitle,
      text2:
        result.status === 'success'
          ? (`Welcome, ${result.data.userName}! ` ?? '') + result.message
          : result.message,
      topOffset: TOAST_UP_OFFSET,
    });
    if (result.status === 'success') {
      navigation.navigate({
        name: 'Landing',
        params: {
          emailText,
          passwordText,
        },
      });
    }
  });

  if (isLoading) {
    return <Loading />;
  }

  React.useEffect(() => {
    if (
      isValidEmail(emailText) &&
      passwordText.length >= 6 &&
      confirmPasswordText === passwordText &&
      userNameText.length > 0
    ) {
      setSignUpEnabled(true);
    } else {
      setSignUpEnabled(false);
    }
  }, [userNameText, emailText, passwordText, confirmPasswordText]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="always"
        keyboardDismissMode="on-drag"
      >
        <Heading containerStyle={styles.heading}>Sign Up</Heading>
        <View>
          <Input
            value={userNameText}
            placeholder="Enter your username"
            onInput={setUserNameText}
          />
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
            showWarning={passwordText.length > 0 && passwordText.length < 6}
            warningText="Your password must be 6 characters or more."
          />
          <Input
            value={confirmPasswordText}
            placeholder="Repeat your password"
            onInput={setConfirmPasswordText}
            secureTextEntry={true}
            showWarning={confirmPasswordText !== passwordText}
            warningText="The second password you entered is different from the first password"
          />
          <Info>For security, your password must be 6 characters or more.</Info>
          <Button onPress={onSignUpPress} disabled={!isSignUpEnabled}>
            <Text style={styles.buttonText}>Confirm to Sign Up</Text>
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;
