import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';

import { styles } from './style';
import { THEME_COLORS } from '../theme';
import { isValidEmail } from '../utils';

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
  showWarning = false,
  warningText = '',
  inputMinLength = 0,
}) => {
  const [inputValue, setInputValue] = React.useState('');
  const [enableSafeEntry, setEnableSafeEntry] = React.useState(false);
  const [isOnFocus, setIsOnFocus] = React.useState(false);

  return (
    <View>
      <View style={styles.container}>
        <TextInput
          onFocus={() => {
            setEnableSafeEntry(true);
            setIsOnFocus(true);
          }}
          onBlur={() => {
            setIsOnFocus(false);
          }}
          onChangeText={newValue => {
            setInputValue(newValue);
            onChangeText(newValue);
          }}
          placeholder={placeholder}
          style={
            showWarning
              ? [styles.textInputWarning, { backgroundColor, borderRadius }]
              : [
                  styles.textInput,
                  { borderWidth, borderRadius, borderColor, backgroundColor },
                ]
          }
          autoFocus={autoFocus}
          secureTextEntry={enableSafeEntry && secureTextEntry}
          value={inputValue}
        />
        {showClearButton && inputValue.length !== 0 && isOnFocus && (
          <TouchableOpacity
            style={styles.clearButtonContainer}
            onPress={() => {
              setInputValue('');
              onChangeText('');
            }}
          >
            <Text style={styles.clearText}>clear</Text>
          </TouchableOpacity>
        )}
      </View>
      {showWarning && warningText.length !== 0 && (
        <View style={styles.warningTextContainer}>
          <Text style={styles.warningText}>{warningText}</Text>
        </View>
      )}
    </View>
  );
};

export { Input };
