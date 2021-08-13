import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { styles } from './style';
import { THEME_COLORS } from '../theme';

const Input = ({
  prefixAccessory,
  placeholder,
  autoFocus,
  onInput,
  multiline = false,
  width = '80%',
  height = 40,
  autoCapitalize = 'none',
  value = '',
  editable = true,
  borderWidth = 1,
  borderRadius = 10,
  borderColor = THEME_COLORS.DEFAULT_INPUT_BACKGROUND,
  backgroundColor = THEME_COLORS.DEFAULT_INPUT_BACKGROUND,
  showClearButton = true,
  secureTextEntry = false,
  showWarning = false,
  warningText = '',
  label = null,
  labelTextStyle,
}) => {
  const [isOnFocus, setIsOnFocus] = React.useState(false);

  const inputWidth = React.useMemo(() => {
    if (prefixAccessory) {
      return '80%';
    }
    if (!showClearButton && !prefixAccessory) {
      return '96%';
    }
    return '90%';
  }, [prefixAccessory]);

  return (
    <View style={styles.outerContainer}>
      {label && (
        <Text
          numberOfLines={1}
          style={[styles.label, labelTextStyle, { width }]}
        >
          {label}
        </Text>
      )}
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
          textAlignVertical={multiline ? 'top' : 'auto'}
          multiline={multiline}
          autoCapitalize={autoCapitalize}
          editable={editable}
          onFocus={() => {
            setIsOnFocus(true);
          }}
          onBlur={() => {
            setIsOnFocus(false);
          }}
          onChangeText={newValue => {
            onInput(newValue);
          }}
          placeholder={placeholder}
          style={[
            styles.textInput,
            {
              width: inputWidth,
              height: height > 60 ? height - 20 : height,
            },
          ]}
          autoFocus={autoFocus}
          secureTextEntry={secureTextEntry}
          value={value}
        />
        <View style={showClearButton ? styles.clearButtonContainer : {}}>
          {showClearButton && value.length !== 0 && isOnFocus && (
            <TouchableOpacity
              onPress={() => {
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
