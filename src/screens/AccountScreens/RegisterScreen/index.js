import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';

import { styles } from './style';
import { Button, Heading, Input, Loading, Info } from '../../../components';
import { useAuthStore } from '../../../shared/zustand/auth';
import { WARNING_TYPES } from '../../../components/Input/constants';

const Register = ({ navigation }) => {
  const { isLoading } = useAuthStore();
  const [emailText, setEmailText] = React.useState('');
  const [passwordText, setPasswordText] = React.useState('');
  const [confirmPasswordText, setConfirmPasswordText] = React.useState('');

  const onSignUpPress = React.useCallback(() => {
    return <Text>Sign Up Successful</Text>;
    // login(emailText, passwordText);
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
        <Heading containerStyle={styles.heading}>Sign Up</Heading>

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
          <Input
            placeholder="Repeat your password"
            onChangeText={setConfirmPasswordText}
            secureTextEntry={true}
            overrideShowWarning={confirmPasswordText !== passwordText}
            warningText="The second password you entered is different from the first password"
          />
          <Info>For security, your password must be 6 characters or more.</Info>
          <Button
            title="Confirm to Sign Up"
            onPress={onSignUpPress}
            disabled={
              passwordText.length < 6 || confirmPasswordText !== passwordText
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;
