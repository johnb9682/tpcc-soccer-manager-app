import React from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';

import { styles } from './style';
import { THEME_COLORS } from '../theme';
import { WARNING_TYPES } from './constants';
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
  showWarningRule = WARNING_TYPES.NEVER,
  overrideShowWarning = false,
  warningText = '',
  inputMinLength = 0,
}) => {
  const [inputValue, setInputValue] = React.useState('');
  const [showWarning, setShowWarning] = React.useState(false);
  const [enableSafeEntry, setEnableSafeEntry] = React.useState(false);
  const [isOnFocus, setIsOnFocus] = React.useState(false);

  const validateInputStringLength = React.useCallback(
    inputString => {
      if (inputString.length < inputMinLength && showWarning === false) {
        setShowWarning(true);
      }
    },
    [showWarning, inputMinLength]
  );

  const validateEmail = React.useCallback(
    emailStr => {
      if (emailStr.length > 0 && !isValidEmail(emailStr)) {
        setShowWarning(true);
      } else {
        setShowWarning(false);
      }
    },
    [showWarning]
  );

  React.useEffect(() => {
    if (inputValue.length === 0) {
      setShowWarning(false);
    }
  }, [inputValue, setShowWarning]);

  React.useEffect(() => {
    if (showWarningRule !== WARNING_TYPES.NEVER) {
      switch (showWarningRule) {
        case WARNING_TYPES.EMAIL_VALIDATION:
          validateEmail(inputValue);
          break;
        case WARNING_TYPES.INPUT_MIN_LENGTH:
          validateInputStringLength(inputValue);
          break;
      }
    }
  }, [inputValue]);

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
            showWarning || overrideShowWarning
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
      {(showWarning || overrideShowWarning) && warningText.length !== 0 && (
        <View style={styles.warningTextContainer}>
          <Text style={styles.warningText}>{warningText}</Text>
        </View>
      )}
    </View>
  );
};

export { Input };
