import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';

import { styles } from './style';
import { THEME_COLORS } from '../theme';

const Input = ({
  placeholder,
  autoFocus,
  onChangeText,
  borderWidth = 1,
  borderRadius = 10,
  borderColor = THEME_COLORS.DEFAULT_INPUT_BACKGROUND,
  backgroundColor = THEME_COLORS.DEFAULT_INPUT_BACKGROUND,
  showClearButton = true,
  secureTextEntry = false,
}) => {
  const [displayValue, setDisplayValue] = React.useState('');
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={newValue => {
          setDisplayValue(newValue);
          onChangeText(newValue);
        }}
        placeholder={placeholder}
        style={[
          styles.textInput,
          { borderWidth, borderRadius, borderColor, backgroundColor },
        ]}
        autoFocus={autoFocus}
        secureTextEntry={secureTextEntry}
        value={displayValue}
      />
      {showClearButton && displayValue.length !== 0 && (
        <TouchableOpacity
          style={styles.clearButtonContainer}
          onPress={() => {
            setDisplayValue('');
            onChangeText('');
          }}
        >
          <Text style={styles.clearText}>clear</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export { Input };
