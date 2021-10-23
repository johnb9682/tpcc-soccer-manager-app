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
  if (disabled) {
    selected = true;
  }
  const [stateSelected, setStateSelected] = React.useState(selected);
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={() => {
        onPress();
        setStateSelected(!stateSelected);
      }}
      style={[styles.container, disabled ? styles.disabled : {}]}
    >
      <View
        style={styles.checkButtonContainer}
        style={[
          styles.checkButton,
          stateSelected ? styles.checkButtonSelected : styles.checkButtonUnSelected,
        ]}
      >
        {stateSelected && <Icon name='check-bold' size={20} style={styles.icon} />}
      </View>
      {children}
    </TouchableOpacity>
  );
};

export { CheckBox };
