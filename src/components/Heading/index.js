import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './style';
import { THEME_FONT_SIZES } from '../theme';

const Heading = ({
  children,
  fontSize = THEME_FONT_SIZES.HEADING_DEFAULT,
  fontWeight = '400',
  containerStyle = {},
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.text, { fontSize, fontWeight }]}>{children}</Text>
    </View>
  );
};

export { Heading };
