import * as React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { Input } from '../Input';
import { styles } from './style';

const SearchInput = ({
  width,
  height,
  autoFocus,
  placeholder,
  onInput,
  value,
  onSearch,
}) => {
  React.useEffect(() => {
    onSearch(value);
  }, [value]);
  return (
    <View style={styles.container}>
      <Input
        value={value}
        onInput={onInput}
        autoFocus={autoFocus}
        placeholder={placeholder}
        prefixAccessory={<Icon name="magnify" size={20} style={styles.icon} />}
        width={width}
        height={height}
      />
    </View>
  );
};

export { SearchInput };
