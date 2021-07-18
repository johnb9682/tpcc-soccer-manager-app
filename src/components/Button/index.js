import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './style';

const Button = ({
  title = 'Click Me',
  onPress,
  disabled = false,
  accessibilityLabel = 'Button',
  buttonColor = 'dodgerblue',
  fontColor = '#ffffff',
  height = 40,
  width = '80%',
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
        accessibilityLabel={accessibilityLabel}
        disabled={disabled}
        style={[
          styles.button,
          {
            backgroundColor: buttonColor,
            color: fontColor,
            height: height,
            width: width,
          },
        ]}
      >
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export { Button };
