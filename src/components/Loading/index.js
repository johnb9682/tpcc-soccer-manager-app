import * as React from 'react';
import { View, Text } from 'react-native';

import { styles } from './style';

const Loading = () => {
  return (
    <View style={styles.container}>
      <Text>Loading</Text>
    </View>
  );
};

export { Loading };
