import * as React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { styles } from './style';

const CheckBox = ({
  selected = false,
  onPress = () => {},
  disabled = false,
  children,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={() => {
        onPress();
      }}
      style={[styles.container, disabled ? styles.disabled : {}]}
    >
      <View
        style={styles.checkButtonContainer}
        style={[
          styles.checkButton,
          selected ? styles.checkButtonSelected : styles.checkButtonUnSelected,
        ]}
      >
        {selected && <Icon name='check-bold' size={20} style={styles.icon} />}
      </View>
      {children}
    </TouchableOpacity>
  );
};

export { CheckBox };
