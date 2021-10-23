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
  searchFunction = async ()=>{},
  multiple = true,
  currentGroupInfo = [],
  data,
  renderItem,
}) => {
  const [searchStr, setSearchStr] = React.useState('');
  const handleOnPress = (target) => {
    if (selectedItems.includes(target)) {
      const index = selectedItems.indexOf(target);
      if (index > -1) {
        selectedItems.splice(index, 1);
      }
      setSelectedItems(selectedItems);
    } else {
      setSelectedItems([...selectedItems, target]);
    }
  };
  React.useEffect(() => {
    console.log(selectedItems);
  }, [selectedItems])
  const InGroup = (target) => {
    if (currentGroupInfo !== []) {
      for (let i = 0; i < currentGroupInfo.length; i++) {
        const selectedTarget = JSON.stringify(currentGroupInfo[i]);
        if (target === selectedTarget) {
          return true;
        }
      }
      return false;
    }
    else {
      return false;
    }

  }
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <SearchInput
          width='94%'
          placeholder={searchPlaceholder}
          value={searchStr}
          onInput={setSearchStr}
          onSearch={searchFunction}
        />
      </View>
      <RoundRectContainer
        borderRadius={15}
        paddingHorizontal={5}
        justifyContent='flex-start'
      >
        {data.map((d, index) => (
          <View key={JSON.stringify(d)} style={styles.itemContainer}>
            <CheckBox
              selected={selectedItems.includes(JSON.stringify(d))}
              disabled={InGroup(JSON.stringify(d))}
              onPress={() => {
                handleOnPress(JSON.stringify(d));
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
