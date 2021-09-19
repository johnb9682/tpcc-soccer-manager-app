import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { styles } from './style';

const NotificationButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon name='bell-outline' size={24} style={styles.icon} />
    </TouchableOpacity>
  );
};

export { NotificationButton };
