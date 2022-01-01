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
    userEventInvitationsReceived,
    userEventInvitationsSent,
    userTeamInvitationsReceived,
    userTeamInvitationsSent,
    fetchUserEventInvitation,
    fetchUserTeamInvitation,
    respondEventInvitation,
    respondTeamInvitation,
    deleteEventInvitation,
    deleteTeamInvitation,
  } = useInvitationStore();

  const handleOnRefresh = async () => {
    const resultEvent = await fetchUserEventInvitation(userInfo.userId);
    const resultTeam = await fetchUserTeamInvitation(userInfo.userId);

    const areBothSuccess =
      resultEvent.type === 'success' && resultTeam.type === 'success';

    Toast.show({
      type: areBothSuccess ? resultEvent.type : 'error',
      text1: areBothSuccess ? 'Success!' : 'Something went wrong',
      text2: resultEvent.message,
      topOffset: TOAST_UP_OFFSET,
    });
  };

  const handleOnCancelEventInvitationSent = async (invitaionId) => {
    const result = await deleteEventInvitation(invitaionId);
    Toast.show({
      type: result.type,
      text1: result.type === 'success' ? 'Success!' : 'Something went wrong',
      text2: result.message,
      topOffset: TOAST_UP_OFFSET,
    });
    handleOnRefresh();
  };
  const handleOnCancelTeamInvitationSent = async (invitaionId) => {
    const result = await deleteTeamInvitation(invitaionId);
    Toast.show({
      type: result.type,
      text1: result.type === 'success' ? 'Success!' : 'Something went wrong',
      text2: result.message,
      topOffset: TOAST_UP_OFFSET,
    });
    handleOnRefresh();
  };

  const handleOnRespondEventInvitation = async (invitaionId, respondValue) => {
    const result = await respondEventInvitation(invitaionId, respondValue);
    Toast.show({
      type: result.type,
      text1: result.type === 'success' ? 'Success!' : 'Something went wrong',
      text2: result.message,
      topOffset: TOAST_UP_OFFSET,
    });
    handleOnRefresh();
  };
  const handleOnRespondTeamInvitation = async (invitaionId, respondValue) => {
    const result = await respondTeamInvitation(invitaionId, respondValue);
    Toast.show({
      type: result.type,
      text1: result.type === 'success' ? 'Success!' : 'Something went wrong',
      text2: result.message,
      topOffset: TOAST_UP_OFFSET,
    });
    handleOnRefresh();
  };

  React.useEffect(() => {
    // fetch invitations on screen focus
    const unsubscribe = navigation.addListener('focus', () => {
      fetchUserEventInvitation(userInfo.userId);
      fetchUserTeamInvitation(userInfo.userId);
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
          invitationsReceived={userEventInvitationsReceived}
          invitationsSent={userEventInvitationsSent}
          onRespond={handleOnRespondEventInvitation}
          onCancel={handleOnCancelEventInvitationSent}
        />
        <TeamNotification
          invitationsReceived={userTeamInvitationsReceived}
          invitationsSent={userTeamInvitationsSent}
          onRespond={handleOnRespondTeamInvitation}
          onCancel={handleOnCancelTeamInvitationSent}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default NotificationScreen;
