import React from 'react';
import { View } from 'react-native';

import { styles } from './style';
import { THEME_COLORS } from '../theme';

const RoundRectContainer = ({
  children,
  borderRadius = 10,
  backgroundColor = THEME_COLORS.DEFAULT_GREY_SCALE,
  borderWidth=0,
  borderColor = THEME_COLORS.WHITE,
  width = '90%',
  height,
  minHeight,
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
          minHeight,
          paddingTop,
          paddingBottom,
          paddingHorizontal,
          justifyContent,
          alignItems,
          borderWidth,
          borderColor,
        },
      ]}
    >
      {children}
    </View>
  );
};

export { RoundRectContainer };
