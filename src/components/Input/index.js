import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { styles } from './style';
import { THEME_COLORS } from '../theme';

const Input = ({
  prefixAccessory,
  placeholder,
  autoFocus,
  value = '',
  onInput,
  width = '80%',
  height = 40,
  borderWidth = 1,
  borderRadius = 10,
  borderColor = THEME_COLORS.DEFAULT_INPUT_BACKGROUND,
  backgroundColor = THEME_COLORS.DEFAULT_INPUT_BACKGROUND,
  showClearButton = true,
  secureTextEntry = false,
  showWarning = false,
  warningText = '',
}) => {
  const [inputValue, setInputValue] = React.useState(value);
  const [enableSafeEntry, setEnableSafeEntry] = React.useState(false);
  const [isOnFocus, setIsOnFocus] = React.useState(false);

  const inputWidth = React.useMemo(() => {
    if (prefixAccessory) {
      return '80%';
    }
    return '90%';
  }, [prefixAccessory]);

  return (
    <View>
      <View
        style={
          showWarning
            ? [
                styles.containerWarning,
                {
                  borderRadius,
                  backgroundColor,
                  width,
                  height,
                },
              ]
            : [
                styles.container,
                {
                  borderWidth,
                  borderRadius,
                  borderColor,
                  backgroundColor,
                  width,
                  height,
                },
              ]
        }
      >
        {prefixAccessory && (
          <View style={styles.prefixAccessoryContainer}>{prefixAccessory}</View>
        )}
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
            onInput(newValue);
          }}
          placeholder={placeholder}
          style={[
            styles.textInput,
            {
              width: inputWidth,
            },
          ]}
          autoFocus={autoFocus}
          secureTextEntry={enableSafeEntry && secureTextEntry}
          value={inputValue}
        />
        <View style={styles.clearButtonContainer}>
          {showClearButton && inputValue.length !== 0 && isOnFocus && (
            <TouchableOpacity
              onPress={() => {
                setInputValue('');
                onInput('');
              }}
            >
              <Icon name="close-circle" size={18} style={styles.clearIcon} />
            </TouchableOpacity>
          )}
        </View>
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
