import React from 'react';
import { SafeAreaView, ScrollView, RefreshControl } from 'react-native';
import Toast from 'react-native-toast-message';

import EventNotifications from './components/EventNotifications';
import TeamNotification from './components/TeamNotifications';
import { styles } from './style';

import { TOAST_UP_OFFSET } from '../../components/constants';
import { useInvitationStore } from '../../shared/zustand/invitation';
import { useAuthStore } from '../../shared/zustand/auth';

const NotificationScreen = ({ route, navigation }) => {
  const { userInfo } = useAuthStore();
  const {
    isLoading,
    userEventInvitations,
    userTeamInvitations,
    fetchUserEventInvitation,
    respondEventInvitation,
  } = useInvitationStore();

  const handleOnRefresh = async () => {
    const result = await fetchUserEventInvitation(userInfo.userId);
    Toast.show({
      type: result.type,
      text1: result.type === 'success' ? 'Success!' : 'Something went wrong',
      text2: result.message,
      topOffset: TOAST_UP_OFFSET,
    });
  };

  const handleOnRespondEventInvitation = async (invitaionId, respondValue) => {
    const result = await respondEventInvitation(invitaionId, respondValue);
    Toast.show({
      type: result.type,
      text1: result.type === 'success' ? 'Success!' : 'Something went wrong',
      text2: result.message,
      topOffset: TOAST_UP_OFFSET,
    });
  };

  React.useEffect(() => {
    // fetch invitations on screen focus
    const unsubscribe = navigation.addListener('focus', () => {
      fetchUserEventInvitation(userInfo.userId);
      // fetchTeamInvitation(userInfo.userId)
    });
    return unsubscribe;
  }, [route, navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps='always'
        keyboardDismissMode='on-drag'
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={handleOnRefresh} />
        }
      >
        <EventNotifications
          invitationsReceived={userEventInvitations}
          invitationsSent={[]}
          onRespond={handleOnRespondEventInvitation}
        />
        <TeamNotification data={userTeamInvitations} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default NotificationScreen;
