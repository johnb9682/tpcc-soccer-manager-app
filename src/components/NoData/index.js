import * as React from 'react';
import { View, Text } from 'react-native';

import { styles } from './style';

const NoData = ({ message = 'No Data', messageStyle }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, messageStyle]}>{message}</Text>
    </View>
  );
};

export { NoData };
