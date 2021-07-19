import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import { styles } from './style';
import { Button, Heading, Input, Loading } from '../../../components';
import { useAuthStore } from '../../../shared/zustand/auth';

const Register = ({ navigation }) => {
  const { isLoading } = useAuthStore();
  const [emailText, setEmailText] = React.useState('');
  const [passwordText, setPasswordText] = React.useState('');

  const onSignUpPress = React.useCallback(() => {
    return <Text>Sign Up Successful</Text>
    // login(emailText, passwordText);
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
        <Heading containerStyle={styles.heading}>Sign Up</Heading>
        <View>
          <Input placeholder="Enter your e-mail" onChangeText={setEmailText} />
          <Input
            placeholder="Enter your password"
            onChangeText={setPasswordText}
            secureTextEntry={true}
          />
          <Input
            placeholder="Repeat your password"
            onChangeText={setPasswordText}
            secureTextEntry={true}
          />
          <Button
            title="Confirm to Sign Up"
            onPress={onSignUpPress}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;
