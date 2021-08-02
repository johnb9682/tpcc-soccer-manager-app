import React from 'react';
import { View } from 'react-native';

import { styles } from './style';
import { THEME_COLORS } from '../theme';

const RoundRectContainer = ({
  children,
  borderRadius = 10,
  backgroundColor = THEME_COLORS.DEFAULT_GREY_SCALE,
  width = '90%',
  height,
  paddingTop = 5,
  paddingBottom = 5,
  paddingHorizontal = 10,
  justifyContent = 'center',
  alignItems = 'center',
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          borderRadius,
          backgroundColor,
          width,
          height,
          paddingTop,
          paddingBottom,
          paddingHorizontal,
          justifyContent,
          alignItems,
        },
      ]}
    >
      {children}
    </View>
  );
};

export { RoundRectContainer };
