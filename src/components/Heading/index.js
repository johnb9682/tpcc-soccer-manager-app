import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { styles } from './style';
import { THEME_FONT_SIZES, THEME_COLORS } from '../theme';

const Heading = ({
  children,
  fontSize = THEME_FONT_SIZES.HEADING_DEFAULT,
  fontWeight = '400',
  containerStyle = {},
  isEditing = false,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.text, { fontSize, fontWeight }]}>{children}</Text>
      {isEditing && (
        <Icon
          name='pencil'
          size={THEME_FONT_SIZES.SYSTEM_FONT}
          color={THEME_COLORS.DEFAULT_INFO_TEXT}
          style={styles.icon}
        />
      )}
    </View>
  );
};

export { Heading };
