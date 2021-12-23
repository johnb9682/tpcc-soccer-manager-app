import React from 'react';
import { SafeAreaView, ScrollView, RefreshControl } from 'react-native';
import Toast from 'react-native-toast-message';

import EventNotification from './components/EventNotifications';
import TeamNotification from './components/TeamNotifications';
import { NoData } from '../../components';
import { styles } from './style';

import { TOAST_UP_OFFSET } from '../../components/constants';
import { useInvitationStore } from '../../shared/zustand/invitation';
import { useAuthStore } from '../../shared/zustand/auth';

const NotificationScreen = () => {
  const { userInfo } = useAuthStore();
  const {
    isLoading,
    userEventInvitations,
    userTeamInvitations,
    fetchUserEventInvitation,
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

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps='always'
        keyboardDismissMode='on-drag'
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={handleOnRefresh} />
        }
      >
        <EventNotification data={userEventInvitations} />
        <TeamNotification data={userTeamInvitations} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default NotificationScreen;
