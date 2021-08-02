import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './style';
import { THEME_COLORS } from '../theme';

const Button = ({
  onPress,
  disabled = false,
  accessibilityLabel = 'Button',
  buttonColor = THEME_COLORS.DEFAULT_BUTTON_BACKGROUND_PRIMARY,
  borderColor = THEME_COLORS.DEFAULT_BUTTON_BACKGROUND_PRIMARY,
  borderRadius = 10,
  borderWidth = 1,
  height = 40,
  width = '80%',
  children,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
        accessibilityLabel={accessibilityLabel}
        disabled={disabled}
        style={
          disabled
            ? [
                styles.buttonDisabled,
                {
                  backgroundColor: buttonColor,
                  height,
                  width,
                  borderRadius,
                  borderColor,
                  borderWidth,
                },
              ]
            : [
                styles.button,
                {
                  backgroundColor: buttonColor,
                  height,
                  width,
                  borderRadius,
                  borderColor,
                  borderWidth,
                },
              ]
        }
      >
        {children}
      </TouchableOpacity>
    </View>
  );
};

export { Button };
