import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './style';

const Heading = ({
  children,
  fontSize = 40,
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
