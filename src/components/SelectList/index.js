import * as React from 'react';
import { View, Text } from 'react-native';

import { styles } from './style';
import { SearchInput } from '../SearchInput';
import { RoundRectContainer } from '../RoundRectContainer';
import { CheckBox } from '../CheckBox';

const SelectList = ({
  selectedItems = [],
  setSelectedItems,
  searchPlaceholder = '',
  multiple = true,
  data = [],
  renderItem,
}) => {
  const [searchStr, setSearchStr] = React.useState('');
  const handleOnSearch = () => {
    console.log(searchStr);
  };
  const handleOnPress = (index) => {
    if (selectedItems.includes(index)) {
      const newItems = selectedItems.splice().filter((item) => item !== index);
      setSelectedItems(newItems);
    } else {
      setSelectedItems([...selectedItems, index]);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <SearchInput
          width='94%'
          placeholder={searchPlaceholder}
          value={searchStr}
          onInput={setSearchStr}
          onSearch={handleOnSearch}
        />
      </View>
      <RoundRectContainer
        borderRadius={15}
        paddingHorizontal={5}
        justifyContent='flex-start'
      >
        {data.map((d, index) => (
          <View key={index} style={styles.itemContainer}>
            <CheckBox
              selected={selectedItems.includes(index)}
              onPress={() => {
                handleOnPress(index);
              }}
            >
              {renderItem}
            </CheckBox>
          </View>
        ))}
      </RoundRectContainer>
    </View>
  );
};

export { SelectList };
