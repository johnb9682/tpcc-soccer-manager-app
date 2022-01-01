import * as React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import Toast from 'react-native-toast-message';

import { styles } from './style';
import { Button, Heading, SelectList } from '../../../components';
import { THEME_COLORS, THEME_FONT_SIZES } from '../../../components/theme';
import { useSearchStore } from '../../../shared/zustand/search';
import { useInvitationStore } from '../../../shared/zustand/invitation';
import { useAuthStore } from '../../../shared/zustand/auth';
import { TOAST_UP_OFFSET } from '../../../components/constants';
const EventInviteScreen = ({ navigation, route }) => {
  const { eventId } = route.params;
  const { userInfo } = useAuthStore();
  const [selectedMembers, setSelectedMembers] = React.useState([]);
  const { fetchSearchedUsers } = useSearchStore();
  const { addEventInvitation } = useInvitationStore();
  const [data, setData] = React.useState([]);
  const handleOnSearch = async (searchStr) => {
    if (searchStr === '') {
      setData([]);
    } else {
      const result = await fetchSearchedUsers(searchStr);
      const searchedUserResults = result.userResponses;
      setData(searchedUserResults);
    }
  };

  const handleOnPressSendInvitation = async () => {
    const selectedMemberIds = selectedMembers.map((member) => {
      const memberId = JSON.parse(member).userId;
      return memberId;
    });
    if (selectedMemberIds.length > 0) {
      const result = await addEventInvitation(
        eventId,
        selectedMemberIds,
        userInfo.userId
      );
      Toast.show({
        type: result.type,
        text1:
          result.type === 'success'
            ? 'Invitation sent!'
            : 'Something went wrong',
        text2: result.message,
        topOffset: TOAST_UP_OFFSET,
      });
    } else {
      Toast.show({
        type: 'error',
        text1: 'Failed to send invitation',
        text2: 'You must select at least one user to invite',
        topOffset: TOAST_UP_OFFSET,
      });
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
          renderItem={['userName', 'email']}
        />
        <Button
          buttonColor={THEME_COLORS.WHITE}
          borderColor={THEME_COLORS.WHITE}
          width='90%'
          onPress={handleOnPressSendInvitation}
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
