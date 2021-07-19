import React from 'react';
import { View, TextInput } from 'react-native';

import { styles } from './style';

const Input = ({
  placeholder,
  style,
  autoFocus,
  onChangeText,
  secureTextEntry = false,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={[styles.textInput, style]}
        autoFocus={autoFocus}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export { Input };
