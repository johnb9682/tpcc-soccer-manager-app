import * as React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

import { styles } from './style';
import { THEME_COLORS } from '../theme';

const Loading = ({
  showText = false,
  size = 'small',
  color = THEME_COLORS.DEFAULT_INFO_TEXT,
  textColor = THEME_COLORS.DEFAULT_INFO_TEXT,
  textValue = 'Loading...',
  center = false,
}) => {
  return (
    <View style={[styles.container, center ? styles.center : {}]}>
      <ActivityIndicator size={size} color={color} />
      {showText && (
        <Text style={[styles.loadingText, { color: textColor }]}>
          {textValue}
        </Text>
      )}
    </View>
  );
};

export { Loading };
