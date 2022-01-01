import React, { useMemo } from 'react';
import { View, Text } from 'react-native';
import { THEME_COLORS, THEME_FONT_SIZES } from '../theme';
import { styles } from './style';

const Avartar = ({
  type = 'circle',
  avatarUri,
  width,
  height,
  content,
  fontSize = THEME_FONT_SIZES.AVATAR_FONT_MAX,
}) => {
  const avatarStyle = useMemo(() => {
    switch (type) {
      case 'square':
        return {
          borderRadius: 0,
        };
      case 'roundedRect':
        return {
          borderRadius: width / 5,
        };
      default:
        return {
          borderRadius: width / 2,
        };
    }
  }, [width, height, type]);
  return (
    <View
      style={[
        styles.avatarContainer,
        avatarStyle,
        {
          width,
          height,
          backgroundColor: THEME_COLORS.DEFAULT_BLUE_PRIMARY,
        },
      ]}
    >
      <Text style={[styles.text, { fontSize }]}>{content.toUpperCase()}</Text>
    </View>
  );
};

export { Avartar };
