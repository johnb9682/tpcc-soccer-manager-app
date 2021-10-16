import * as React from 'react';
import { View, Text } from 'react-native';

import { styles } from './style';
import { SearchInput } from '../SearchInput';
import { RoundRectContainer } from '../RoundRectContainer';
import { CheckBox } from '../CheckBox';
import { useSearchStore } from '../../shared/zustand/search';
import { set } from 'react-native-reanimated';

const SelectList = ({
  selectedItems = [],
  setSelectedItems,
  searchPlaceholder = '',
  multiple = true,
  currentGroupInfo,
}) => {
  const [searchStr, setSearchStr] = React.useState('');
  const [data, setData] = React.useState([]);
  const { fetchSearchedUsers } = useSearchStore();
  const handleOnSearch = async () => {
    if (searchStr === "") {
      setData([]);
    }
    else {
      const result = await fetchSearchedUsers(searchStr);
      const searchedUserResults = result.userResponses;
      setData(searchedUserResults);
    }
    // console.log(data);
  };
  const handleOnPress = (userId) => {
    if (selectedItems.includes(userId)) {
      const index = selectedItems.indexOf(userId);
      if (index > -1) {
        selectedItems.splice(index, 1);
      }
      setSelectedItems(selectedItems);
    } else {
      setSelectedItems([...selectedItems, userId]);
    }
  };
  React.useEffect(() => {
    console.log(selectedItems);
  }, [selectedItems])
  const InGroup = (userId) => {
    for (let i = 0; i < currentGroupInfo.length; i++) {
      const selectedUserId = currentGroupInfo[i].userId;
      if (userId === selectedUserId) {
        return true;
      }
    }
    return false;
  }
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
          <View key={d.userId} style={styles.itemContainer}>
            <CheckBox
              selected={selectedItems.includes(d.userId)}
              disabled={InGroup(d.userId)}
              onPress={() => {
                handleOnPress(d.userId);
              }}
            >
              <Text>{d.userName}, {d.email}</Text>
            </CheckBox>
          </View>
        ))}
      </RoundRectContainer>
    </View>
  );
};

export { SelectList };
