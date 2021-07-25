import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';

import { styles } from './style';
import { Button, Heading, Input, Loading, Info } from '../../../components';
import { useAuthStore } from '../../../shared/zustand/auth';
import { isValidEmail } from '../../../components/utils';

const Register = ({ navigation }) => {
  const { isLoading } = useAuthStore();
  const [emailText, setEmailText] = React.useState('');
  const [passwordText, setPasswordText] = React.useState('');
  const [confirmPasswordText, setConfirmPasswordText] = React.useState('');
  const [isSignUpEnabled, setSignUpEnabled] = React.useState(false);

  const onSignUpPress = React.useCallback(() => {
    return <Text>Sign Up Successful</Text>;
    // login(emailText, passwordText);
  });
  if (isLoading) {
    return <Loading />;
  }

  React.useEffect(() => {
    if (
      isValidEmail(emailText) &&
      passwordText.length >= 6 &&
      confirmPasswordText === passwordText
    ) {
      setSignUpEnabled(true);
    } else {
      setSignUpEnabled(false);
    }
  }, [emailText, passwordText, confirmPasswordText]);

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
            placeholder="Enter your e-mail"
            onChangeText={setEmailText}
            warningText="Invalid e-mail format"
            showWarning={emailText.length > 0 && !isValidEmail(emailText)}
          />
          <Input
            placeholder="Enter your password"
            onChangeText={setPasswordText}
            secureTextEntry={true}
            showWarning={passwordText.length > 0 && passwordText.length < 6}
            warningText="Your password must be 6 characters or more."
          />
          <Input
            placeholder="Repeat your password"
            onChangeText={setConfirmPasswordText}
            secureTextEntry={true}
            showWarning={confirmPasswordText !== passwordText}
            warningText="The second password you entered is different from the first password"
          />
          <Info>For security, your password must be 6 characters or more.</Info>
          <Button
            title="Confirm to Sign Up"
            onPress={onSignUpPress}
            disabled={!isSignUpEnabled}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;
