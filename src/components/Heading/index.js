import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './style';

const Heading = ({ text, containerStyle = {} }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export { Heading };
