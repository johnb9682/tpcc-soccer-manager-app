import * as React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';

import { styles } from './style';
import { Button, Heading, SelectList } from '../../../components';
import { THEME_COLORS, THEME_FONT_SIZES } from '../../../components/theme';
import { useSearchStore } from '../../../shared/zustand/search';

const EventInviteScreen = ({ navigation, route }) => {
  const [selectedMembers, setSelectedMembers] = React.useState([]);
  const { fetchSearchedUsers } = useSearchStore();
  const [data, setData] = React.useState([]);
  const handleOnSearch = async (searchStr) => {
    if (searchStr === "") {
      setData([]);
    }
    else {
      const result = await fetchSearchedUsers(searchStr);
      const searchedUserResults = result.userResponses;
      setData(searchedUserResults);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps='always'
        keyboardDismissMode='on-drag'
      >
        <Heading
          containerStyle={styles.heading}
          fontSize={THEME_FONT_SIZES.SYSTEM_FONT_EX_LARGE}
          fontWeight='bold'
        >
          {route.params.eventName}
        </Heading>
        <SelectList
          searchPlaceholder='Search Username'
          selectedItems={selectedMembers}
          setSelectedItems={setSelectedMembers}
          currentGroupInfo={route.params.participants}
          data={data}
          searchFunction={handleOnSearch}
          renderItem = {<Text>Testing User</Text> }
        />
        <Button
          buttonColor={THEME_COLORS.WHITE}
          borderColor={THEME_COLORS.WHITE}
          width='90%'
          onPress={() => {
            console.log('inviting...', selectedMembers);
          }}
        >
          <Text style={[styles.buttonText, styles.inviteButton]}>
            Send Invitation
          </Text>
        </Button>
        <View style={styles.cancelButtonContainer}>
          <Button
            buttonColor={THEME_COLORS.WHITE}
            borderColor={THEME_COLORS.WHITE}
            width='90%'
            onPress={() => {
              navigation.navigate('EventDetail');
            }}
          >
            <Text style={[styles.buttonText, styles.cancelButton]}>Cancel</Text>
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EventInviteScreen;
