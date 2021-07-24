import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './style';

const Info = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export { Info };
